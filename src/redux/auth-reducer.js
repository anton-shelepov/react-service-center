const SET_AUTH_DATA = "SET_AUTH_DATA"
const LOGOUT = "LOGOUT"

export const setAuthDataAC = (userLogin, userPassword) => ({
    type: SET_AUTH_DATA,
    userLogin,
    userPassword,
})

export const logoutAC = () => ({
    type: LOGOUT
})

let initialState = {
    isAuth: false,
    userLogin: '',
    userPassword: '',
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case SET_AUTH_DATA: 
            return {
                ...state,
                isAuth: true,
                userLogin: action.userLogin,
                userPassword: action.userPassword,
            } 
        case LOGOUT:
            return {
                ...state,
                isAuth: false,
                userLogin: '',
                userPassword: '',
            }   

        default:
            return state;
    }
}

export default authReducer;