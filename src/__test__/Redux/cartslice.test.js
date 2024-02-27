import { addItemToCart, getCartItem, removeItemFromCart, updateItemToCart } from "../../redux/feature/cartslice";
import cartsliceReducer from "../../redux/feature/cartslice";

let mockAppState = {
    loading: false,
    itemToAdd: [{
        firstname: "Vishnu"
    }]
}
const removeMockData = {
    removeLoading: false,
    deleteDataPayload: [{
        id: 12
    }]
}
const updateMockData = {
    updateLoading: false,
    updatedCartItem: [{
        id: 12
    }]
}
const getMockData = {
    cartItemLoading: false,
    cartItem: [{
        id: 12
    }]
}
describe("should test addItemToCart", () => {
    test('should test addItemToCart in pending state', () => {
        const action = {
            type: addItemToCart.pending.type,
            payload: false,
        };
        expect(cartsliceReducer(mockAppState, action)).toEqual({
            ...mockAppState,
            loading: true,
        });
    });
    test('should test addItemToCart in rejected state', () => {
        const action = {
            type: addItemToCart.rejected.type,
            payload: []
        };
        expect(cartsliceReducer({
            error: undefined,
            loading: false,
        }, action)).toEqual({
            error: undefined,
            loading: false,
        });
    })
    test('should test addItemToCart in fulfilled state', () => {
        const action = {
            type: addItemToCart.fulfilled.type,
            payload: { firstname: "Vishnu" },
        };
        expect(cartsliceReducer(mockAppState, action)).toEqual({
            ...mockAppState,
            loading: false,
        });
    })
    test('should test removeItemFromCart in pending state', () => {
        const action = {
            type: removeItemFromCart.pending.type,
            payload: false,
        };
        expect(cartsliceReducer(removeMockData, action)).toEqual({
            ...removeMockData,
            removeLoading: true,
        });
    });
    test('should test removeItemFromCart in rejected state', () => {
        const action = {
            type: removeItemFromCart.rejected.type,
            payload: []
        };
        expect(cartsliceReducer({
            removeError: undefined,
            removeLoading: false,
        }, action)).toEqual({
            removeError: undefined,
            removeLoading: false,
        });
    })
    test('should test removeItemFromCart in fulfilled state', () => {
        const action = {
            type: removeItemFromCart.fulfilled.type,
            payload: { id: 12 },
        };
        expect(cartsliceReducer(removeMockData, action)).toEqual({
            ...removeMockData,
            removeLoading: false,
        });
    })
    test('should test updateItemToCart in pending state', () => {
        const action = {
            type: updateItemToCart.pending.type,
            payload: false,
        };
        expect(cartsliceReducer(updateMockData, action)).toEqual({
            ...updateMockData,
            updateLoading: true,
        });
    });
    test('should test updateItemToCart in rejected state', () => {
        const action = {
            type: updateItemToCart.rejected.type,
            payload: []
        };
        expect(cartsliceReducer({  
            updateError: undefined,
            updateLoading: false,
        }, action)).toEqual({
            updateError: undefined,
            updateLoading: false,
        });
    })
    test('should test updateItemToCart in fulfilled state', () => {
        const action = {
            type: updateItemToCart.fulfilled.type,
            payload: {id: 12},
        };
        expect(cartsliceReducer(updateMockData, action)).toEqual({
            ...updateMockData,
            updateLoading: false,
        });
    })
    test('should test getCartItem in pending state', () => {
        const action = {
            type: getCartItem.pending.type,
            payload: false,
        };
        expect(cartsliceReducer(getMockData, action)).toEqual({
            ...getMockData,
            cartItemLoading: true,
        });
    });
    test('should test getCartItem in rejected state', () => {
        const action = {
            type: getCartItem.rejected.type,
            payload: []
        };
        expect(cartsliceReducer({  
            getCartItemError: undefined,
            cartItemLoading: false,
        }, action)).toEqual({
            getCartItemError: undefined,
            cartItemLoading: false,
        });
    })
    test('should test getCartItem in fulfilled state', () => {
        const action = {
            type: getCartItem.fulfilled.type,
            payload: {id: 12},
        };
        expect(cartsliceReducer(getMockData, action)).toEqual({
            ...getMockData,
            cartItemLoading: false,
        });
    })
})