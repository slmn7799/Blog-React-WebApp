export const LoginStart = (userCreds) => ({
    type: "LOGIN_START"
});

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user
});

export const LoginFailure = () => ({
    type: "LOGIN_FAILURE"
});

export const LogOut = () => ({
    type: "LOGOUT"
});

export const UpdateStart = (userCreds) => ({
    type: "UPDATE_START"
});

export const UpdateSuccess = (user) => ({
    type: "UPDATE_SUCCESS",
    payload: user
});

export const UpdateFailure = () => ({
    type: "UPDATE_FAILURE"
});

export const RegisterStart = (userCreds) => ({
    type: "REGISTER_START"
});

export const RegisterSuccess = (user) => ({
    type: "REGISTER_SUCCESS",
    payload: user
});

export const RegisterFailure = () => ({
    type: "REGISTER_FAILURE"
});