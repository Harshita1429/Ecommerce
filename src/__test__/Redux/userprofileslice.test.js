import { userProfileGet } from "../../redux/feature/userprofileslice";
import userprofilesliceReducer from "../../redux/feature/userprofileslice";

let mockAppState = {
    loading: false,
    userData: [{
        firstname:"Vishnu"
    }]
}
describe("should test userProfileGet", () => {
    test('should test userProfileGet in pending state', () => {
        const action = {
            type: userProfileGet.pending.type,
            payload: false,
        };
        expect(userprofilesliceReducer(mockAppState, action)).toEqual({
            ...mockAppState,
            loading: true,
        });
    });
    test('should test userProfileGet in rejected state', () => {
        const action = {
            type: userProfileGet.rejected.type,
            payload: []
        };
        expect(userprofilesliceReducer({
            error: undefined,
            loading: false,
        }, action)).toEqual({
            error: undefined,
            loading: false,
        });
    })
    test('should test userProfileGet in fulfilled state', () => {
        const action = {
            type: userProfileGet.fulfilled.type,
            payload:[ {firstname:"Vishnu"}],
        };
        expect(userprofilesliceReducer(mockAppState, action)).toEqual({
            ...mockAppState,
            loading: false,
        });
    })
})