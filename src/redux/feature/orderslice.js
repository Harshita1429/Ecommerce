import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const createOrder = createAsyncThunk("/order/create",
    async (reqData) => {
        console.log("reqData", reqData);
        var newjsonobj = { ...reqData.userAddress }
        delete newjsonobj.id;
        const response = await axios.post("http://localhost:8080/api/orders/", newjsonobj, { headers: { "Authorization": `Bearer ${reqData.jwt}` } });
        if (response.data.id) {
            reqData.navigate({ search: `step=3&order_id=` + response.data.id });
        }
        console.log("data", response.data);
        return response.data;
    });
export const getOrderById = createAsyncThunk("/order/get",
    async ({ jwt, orderId }) => {
        const response = await axios.get("http://localhost:8080/api/orders/" + orderId, { headers: { "Authorization": `Bearer ${jwt}` } });
        return response.data;
    });
export const getOrderHistory = createAsyncThunk("/order/history",
    async ({ jwt }) => {
        const response = await axios.get("http://localhost:8080/api/orders/user", { headers: { "Authorization": `Bearer ${jwt}` } });
        return response.data;
    });
const orderslice = createSlice({
    name: "order",
    initialState: {
        createOrderData: [],
        loading: false,
        error: null,
        getOrderData: [],
        getOrderLoading: false,
        getOrderError: null,
        getOrderHistory: [],
        orderHistoryLoading: false,
        orderHistoryError: null
    },
    extraReducers(builder) {
        builder
            .addCase(createOrder.pending, (state, action) => {
                state.loading = true;
            })
        builder
            .addCase(createOrder.fulfilled, (state, action) => {
                state.loading = false;
                state.createOrderData = [action.payload];
            })
        builder
            .addCase(createOrder.rejected, (state, action) => {
                state.loading = true;
                state.error = action.error;
            })
        builder
            .addCase(getOrderById.pending, (state, action) => {
                state.getOrderLoading = true;
            })
        builder
            .addCase(getOrderById.fulfilled, (state, action) => {
                state.getOrderLoading = false;
                state.getOrderData = [action.payload];
            })
        builder
            .addCase(getOrderById.rejected, (state, action) => {
                state.getOrderLoading = true;
                state.getOrderError = action.error;
            })
        builder
            .addCase(getOrderHistory.pending, (state, action) => {
                state.orderHistoryLoading = true;
            })
        builder
            .addCase(getOrderHistory.fulfilled, (state, action) => {
                state.orderHistoryLoading = false;
                state.getOrderHistory = [action.payload];
            })
        builder
            .addCase(getOrderHistory.rejected, (state, action) => {
                state.orderHistoryLoading = true;
                state.orderHistoryError = action.error;
            })
    }
});
export default orderslice.reducer;