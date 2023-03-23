import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

type authToken = {
    value : string | null;
};
const initialState: authToken = {
    value: null
};

const authTokenSlice = createSlice(
    {
        name: "session",
        initialState:initialState,
        reducers: {
            setToken : (state, action: PayloadAction<string>)=> {
                state.value = action.payload
            },
            clearToken: (state)=>{
                state.value = null 
            }
        }
    }
)

export const authTokenSelector = (state: RootState)=>state.authToken.value;
export const {setToken, clearToken} = authTokenSlice.actions;
export default authTokenSlice.reducer;