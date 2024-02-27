import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const signUpData = createAsyncThunk("/user/signup",
    async (userData) => {
        const response = await axios.post("http://localhost:8080/auth/signup", userData);
        if (response.data.jwt);
        {
            localStorage.setItem("jwt", response.data.jwt);
        }
        return response.data;
    });
export const signInData = createAsyncThunk("/user/signin",
    async (userData) => {
        const response = await axios.post("http://localhost:8080/auth/signin", userData);
        if (response.data.jwt);
        {
            localStorage.setItem("jwt", response.data.jwt);
        }
        return response.data;
    });
const authslice = createSlice({
    name: "user",
    initialState: {
        signUpResponse: [],
        signUpLoading: false,
        signUpError: null,
        signInResponse: [],
        signInLoading: false,
        signInError: null,
    },
    extraReducers(builder) {
        builder
            .addCase(signUpData.pending, (state, action) => {
                state.signUpLoading = true;
            })
        builder
            .addCase(signUpData.fulfilled, (state, action) => {
                state.signUpLoading = false;
                state.signUpResponse = [action.payload];
            })
        builder
            .addCase(signUpData.rejected, (state, action) => {
                state.signUpLoading = false;
                state.signUpError = action.error;
            })
        builder
            .addCase(signInData.pending, (state, action) => {
                state.signInLoading = true;
            })
        builder
            .addCase(signInData.fulfilled, (state, action) => {
                state.signInLoading = false;
                state.signInResponse = [action.payload];
            })
        builder
            .addCase(signInData.rejected, (state, action) => {
                state.signInLoading = false;
                state.signInError = action.error;
            })

    }
});
export default authslice.reducer;