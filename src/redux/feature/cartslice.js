import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const addItemToCart = createAsyncThunk("/cart/add",
    async ({ jwt, data }) => {
        const response = await axios.put("http://localhost:8080/api/cart/add", data, { headers: { "Authorization": `Bearer ${jwt}` } });
        return response.data;
    });
export const removeItemFromCart = createAsyncThunk("/cart/delete",
    async ({ jwt, cartItemId }) => {
        const response = await axios.delete("http://localhost:8080/api/cart_items/" + cartItemId, { headers: { "Authorization": `Bearer ${jwt}` } });
        return response.data;
    });
export const updateItemToCart = createAsyncThunk("/cart/update",
    async ({ jwt, data}) => {
        console.log("data",data);
        const response = await axios.put("http://localhost:8080/api/cart_items/" + data.cartItemId, data.data, { headers: { "Authorization": `Bearer ${jwt}` } });
        return response.data;
    });
export const getCartItem = createAsyncThunk("/cart/get",
    async ({ jwt }) => {
        const response = await axios.get("http://localhost:8080/api/cart/" , { headers: { "Authorization": `Bearer ${jwt}` } });
         console.log("cart",response.data);
        return response.data;
    });
const cartslice = createSlice({
    name: "cart",
    initialState: {
        itemToAdd: [],
        loading: false,
        error: null,
        deleteDataPayload: [],
        removeLoading: false,
        removeError: null,
        updatedCartItem: [],
        updateLoading: false,
        updateError: null,
        cartItem:[],
        cartItemLoading:false,
        getCartItemError:null,
    },
    extraReducers(builder) {
        builder
            .addCase(addItemToCart.pending, (state, action) => {
                state.loading = true;
            })
        builder
            .addCase(addItemToCart.fulfilled, (state, action) => {
                state.loading = false;
                state.itemToAdd = [action.payload];
            })
        builder
            .addCase(addItemToCart.rejected, (state, action) => {
                state.loading = true;
                state.error = action.error;
            })
        builder
            .addCase(removeItemFromCart.pending, (state, action) => {
                state.removeLoading = true;
            })
        builder
            .addCase(removeItemFromCart.fulfilled, (state, action) => {
                state.removeLoading = false;
                state.deleteDataPayload = [action.payload];
            })
        builder
            .addCase(removeItemFromCart.rejected, (state, action) => {
                state.removeLoading = true;
                state.removeError = action.error;
            })
        builder
            .addCase(updateItemToCart.pending, (state, action) => {
                state.updateLoading = true;
            })
        builder
            .addCase(updateItemToCart.fulfilled, (state, action) => {
                state.updateLoading = false;
                state.updatedCartItem = [action.payload];
            })
        builder
            .addCase(updateItemToCart.rejected, (state, action) => {
                state.updateLoading = true;
                state.updateError = action.error;
            })
            builder
            .addCase(getCartItem.pending, (state, action) => {
                state.cartItemLoading = true;
            })
        builder
            .addCase(getCartItem.fulfilled, (state, action) => {
                state.cartItemLoading = false;
                state.cartItem = [action.payload];
            })
        builder
            .addCase(getCartItem.rejected, (state, action) => {
                state.cartItemLoading = true;
                state.getCartItemError = action.error;
            })
    }
});
export default cartslice.reducer;