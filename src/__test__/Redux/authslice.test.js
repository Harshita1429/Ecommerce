import { signInData, signUpData } from "../../redux/feature/authslice";
import authsliceReducer from "../../redux/feature/authslice";

let mockAppState = {
    signUpLoading: false,
    signUpResponse: [{
        message:"SignUp success"
    }]
}
let signInAppState = {
    signInLoading: false,
    signInResponse: [{
        message:"SignIn success"
    }]
}

describe("should test signUpData", () => {
    test('should test signUpData in pending state', () => {
        const action = {
            type: signUpData.pending.type,
            payload: false,
        };
        expect(authsliceReducer(mockAppState, action)).toEqual({
            ...mockAppState,
            signUpLoading: true,
        });
    });
    test('should test signUpData in rejected state', () => {
        const action = {
            type: signUpData.rejected.type,
            payload: []
        };
        expect(authsliceReducer({
            signUpError: undefined,
            signUpLoading: false,
        }, action)).toEqual({
            signUpError: undefined,
            signUpLoading: false,
        });
    })
    test('should test signUpData in fulfilled state', () => {
        const action = {
            type: signUpData.fulfilled.type,
            payload: {  message:"SignUp success"},
        };
        expect(authsliceReducer(mockAppState, action)).toEqual({
            ...mockAppState,
            signUpLoading: false,
        });
    })
    test('should test signInData in pending state', () => {
        const action = {
            type: signInData .pending.type,
            payload: false,
        };
        expect(authsliceReducer(signInAppState, action)).toEqual({
            ...signInAppState,
            signInLoading: true,
        });
    });
    test('should test signInData in rejected state', () => {
        const action = {
            type: signInData.rejected.type,
            payload: []
        };
        expect(authsliceReducer({
            signInError: undefined,
            signInLoading: false,
        }, action)).toEqual({
            signInError: undefined,
            signInLoading: false,
        });
    })
    test('should test signInData in fulfilled state', () => {
        const action = {
            type: signInData.fulfilled.type,
            payload: {  message:"SignIn success"},
        };
        expect(authsliceReducer(signInAppState, action)).toEqual({
            ...signInAppState,
            signInLoading: false,
        });
    })
})