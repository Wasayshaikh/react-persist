import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
type AuthType = {
    user: { id: number | string, username: string, email: string }| null,
    status:boolean
};
let initialState: AuthType = {
    user: null,
    status:false
}
let users = [
    {id:"1", email:"admin@email.com", username:"admin", password:"1234"},
    {id:"2", email:"user@email.com", username:"user", password:"1234"},
    {id:"3", email:"test@email.com", username:"test", password:"1234"},
    {id:"4", email:"first@email.com", username:"first", password:"1234"},
    {id:"5", email:"second@email.com", username:"second", password:"1234"}
]
export const loginAction = createAsyncThunk('Auth/loginAction',async (credentials:{email:string, password:string}, { rejectWithValue }) => {
    try {
        // Simulating login with hardcoded users array
        const { email, password } = credentials;
        const logged_in_user = users.find(
          (user) => user.email === email && user.password === password
        );
  
        if (logged_in_user) {
          return logged_in_user; // Return the user data if login is successful
        } else {
          return rejectWithValue({ message: 'Invalid credentials' });
        }
      } catch (error) {
        return rejectWithValue({ message: 'failed to connect' }); // Return the error response data
      }
})
const AuthReducer = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        logoutAction(state){
            // const ca = users.find(user => user.email === 'admin@email.com' && user.password === '1234');
            state.user =null,
            state.status = false;
        }

    },
    extraReducers: (builder) => {
        builder.addCase(loginAction.pending, (state) => {
            state.status = false;
        });
        builder.addCase(loginAction.fulfilled, (state, action) => {
          state.status = true;
          state.user=action.payload; // Set the logged-in user data
        });
        builder.addCase(loginAction.rejected, (state,) => {
          state.status = false;
          state.user = null; // Set the error message
        });
      },

})
export const authUser = (state: { auth_user: AuthType }) => state.auth_user.user;
export const checkAuth = (state: { auth_user: AuthType }) => state.auth_user.status;
export const { logoutAction } = AuthReducer.actions

export default AuthReducer.reducer