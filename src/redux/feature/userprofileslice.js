import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const userProfileGet = createAsyncThunk("/user/profile",
    async (jwt) => {
        const response = await axios.get("http://localhost:8080/api/users/profile", { headers: { "Authorization": `Bearer ${jwt}` } });
        return response.data;
    });
const userprofileslice = createSlice({
    name: "user",
    initialState: {
        userData: [],
        loading: false,
        error: null,
    },

    reducers: {
        logout: state => {
            state.userData = "";
            localStorage.removeItem("jwt");
        }
    },
    extraReducers(builder) {
        builder
            .addCase(userProfileGet.pending, (state, action) => {
                state.loading = true;
            })
        builder
            .addCase(userProfileGet.fulfilled, (state, action) => {
                state.loading = false;
                state.userData = action.payload;
            })
        builder
            .addCase(userProfileGet.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
    }
});
export const {logout}=userprofileslice.actions;
export default userprofileslice.reducer;