import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false
}

export const UserContext = createContext( INITIAL_STATE );
export const UserContextDispatch = createContext( INITIAL_STATE );

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer( Reducer, INITIAL_STATE);

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.user));
    },[state.user]);

    return (
        <UserContext.Provider
        value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error, 
            dispatch
        }}>
            <UserContextDispatch.Provider 
            value={dispatch}>
            {children}
            </UserContextDispatch.Provider>
        </UserContext.Provider>
    );
}