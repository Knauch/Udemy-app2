import {USER_ACTION_TYPES} from './user.types';

export const USER_INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null,
}

//action has 2 things type and payload. Payload is the stuf that contains what we want to return from action. type is a string (unique) 
//state should contain default value (which is INITIAL_STATE)

//all reducers are being triggered after any actions so we need to make Default value STATE. 
//So this reducer knows that if not one of the 'cases' was triggered just return state
export const userReducer = (state = USER_INITIAL_STATE, action) => {
    const { type, payload } = action;

    //creating a switch with deferent type strings
    switch (type) {
        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
            return {
                ...state, //meaning that we will return all values from state, and modify only currentUser
                currentUser: payload
            };

        case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
            return {...state, currentUser: null};

        case USER_ACTION_TYPES.SIGN_IN_FAILED:
        case USER_ACTION_TYPES.SIGN_UP_FAILED:
        case USER_ACTION_TYPES.SIGN_OUT_FAILED:
            return { ...state, error: payload };

        default:
            return state;
    }
}