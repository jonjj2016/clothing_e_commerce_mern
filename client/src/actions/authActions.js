import * as Types from './types';
export const registerUser = (data) => ({
    type: Types.REGISTER,
    payload: data
})
export const loginUser = data => ({
    type: Types.LOGIN,
    payload: data
})
export const loadUser = () => ({
    type: Types.LOADUSER
})
export const logOutUser = () => ({
    type: Types.LOGOUTUSER
})