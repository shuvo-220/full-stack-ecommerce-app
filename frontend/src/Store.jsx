import { createContext, useReducer } from "react";


export const Store = createContext();

const initialState = {
    user : localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    token : localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null,
}

const reducer = (state, action)=>{
    switch(action.type){
        case 'LOGIN':
            return{
                ...state,
                user:action.payload
            }
        case 'LOGOUT':
            return{
                user:null
            }
        default:
            return state;
    }
}

export const StoreProvider = ({children}) =>{
    const[state, dispatch] = useReducer(reducer, initialState);
    const value = {state, dispatch}
    return <Store.Provider value={value} >
        {children}
    </Store.Provider>
}