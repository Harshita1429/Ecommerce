import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const productGetById = createAsyncThunk("/product/get",
    async ({ jwt, data }) => {
        const response = await axios.get("http://localhost:8080/api/products?category=" + data.category + "&color=" + data.colors + "&size=" + data.sized + "&minPrice=" + data.minPrice + "&maxPrice=" + data.maxPrice + "&minDiscount=" + data.minDiscount + "&maxDiscount=" + data.maxDiscount + "&sort=" + data.sort + "&stock=" + data.stock + "&pageNumber=" + data.pageNumber + "&pageSize=" + data.pageSize, { headers: { "Authorization": `Bearer ${jwt}` } });
        return response.data;
    });
export const findProductById = createAsyncThunk("/product/findById",
    async ({ jwt, productId }) => {
        const response = await axios.get("http://localhost:8080/api/products/id/" + productId, { headers: { "Authorization": `Bearer ${jwt}` } });
        return response.data;
    });
const productslice = createSlice({
    name: "product",
    initialState: {
        productData: [],
        loading: false,
        error: null,
        getProductData: [],
        getProductLoading: false,
        getProductError: null
    },
    extraReducers(builder) {
        builder
            .addCase(productGetById.pending, (state, action) => {
                state.loading = true;
            })
        builder
            .addCase(productGetById.fulfilled, (state, action) => {
                state.loading = false;
                state.productData = [action.payload];
            })
        builder
            .addCase(productGetById.rejected, (state, action) => {
                state.loading = true;
                state.error = action.error;
            })
        builder
            .addCase(findProductById.pending, (state, action) => {
                state.getProductLoading = true;
            })
        builder
            .addCase(findProductById.fulfilled, (state, action) => {
                state.getProductLoading = false;
                state.getProductData = [action.payload];
            })
        builder
            .addCase(findProductById.rejected, (state, action) => {
                state.getProductLoading = true;
                state.getProductError = action.error;
            })
    }
});
export default productslice.reducer;