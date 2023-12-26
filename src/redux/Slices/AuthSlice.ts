import { createSlice } from "@reduxjs/toolkit";

type AuthType = {
    user: Array<{ id: number | string, username: string, email: string }| []>,
    status:boolean
};
let initialState: AuthType = {
    user: [],
    status:false
}
const AuthReducer = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        login(state) {
            state.user.push({id:"Asdf",email:"asdf",username:"asdf"}),
            state.status = true;
        },
        logout(state){
            state.user =[],
            state.status = false;
        }

    }

})
export const authUser = (state: { auth_user: AuthType }) => state.auth_user;
export const { login, logout } = AuthReducer.actions
export default AuthReducer.reducer
