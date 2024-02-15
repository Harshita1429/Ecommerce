import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const productGetById = createAsyncThunk("/product/get",
    async ({ jwt, data }) => {;
        const response = await axios.get("http://localhost:8080/api/products?category=" + data.category + "&color=" + data.colors + "&size=" + data.sized + "&minPrice=" + data.minPrice + "&maxPrice=" + data.maxPrice + "&minDiscount=" + data.minDiscount + "&maxDiscount=" + data.maxDiscount + "&sort=" + data.sort + "&stock=" + data.stock + "&pageNumber=" + data.pageNumber + "&pageSize=" + data.pageSize, { headers: { "Authorization": `Bearer ${jwt}` } });
        return response.data;
    });
export const findProductById = createAsyncThunk("/product/findById",
    async ({ jwt, productId }) => {
        const response = await axios.get("http://localhost:8080/api/products/id/" + productId, { headers: { "Authorization": `Bearer ${jwt}` } });
        return response.data;
    });
export const deleteProductById = createAsyncThunk("/product/delete",
    async ({ jwt, productId }) => {
        const response = await axios.delete("http://localhost:8080/api/admin/products/" + productId + "/delete", { headers: { "Authorization": `Bearer ${jwt}` } });
        return response.data;
    });
export const addProduct = createAsyncThunk("/product/add",
    async ({ jwt, data }) => {
        const response = await axios.post("http://localhost:8080/api/admin/products/", data, { headers: { "Authorization": `Bearer ${jwt}` } });
        return response.data;
    });
export const updateProduct = createAsyncThunk("/product/update",
    async ({ jwt, productData,productId }) => {
        const response = await axios.put("http://localhost:8080/api/admin/products/"+productId+"/update", productData, { headers: { "Authorization": `Bearer ${jwt}` } });
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
        getProductError: null,
        deleteProduct: [],
        deleteLoading: false,
        deleteError: null,
        addproduct: [],
        addProductLoading: false,
        addProductError: null,
        updateProduct:[],
        updateLoading:false,
        updateError:null
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
        builder
            .addCase(deleteProductById.pending, (state, action) => {
                state.deleteLoading = true;
            })
        builder
            .addCase(deleteProductById.fulfilled, (state, action) => {
                state.deleteLoading = false;
                state.deleteProduct = [action.payload];
            })
        builder
            .addCase(deleteProductById.rejected, (state, action) => {
                state.deleteLoading = true;
                state.deleteError = action.error;
            })
        builder
            .addCase(addProduct.pending, (state, action) => {
                state.addProductLoading = true;
            })
        builder
            .addCase(addProduct.fulfilled, (state, action) => {
                state.addProductLoading = false;
                state.addproduct = [action.payload];
            })
        builder
            .addCase(addProduct.rejected, (state, action) => {
                state.addProductLoading = true;
                state.addProductError = action.error;
            })
            builder
            .addCase(updateProduct.pending, (state, action) => {
                state.updateLoading = true;
            })
        builder
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.updateLoading = false;
                state.updateProduct = [action.payload];
            })
        builder
            .addCase(updateProduct.rejected, (state, action) => {
                state.updateLoading = true;
                state.updateError = action.error;
            })
    }
});
export default productslice.reducer;