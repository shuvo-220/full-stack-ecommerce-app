import { createContext, useReducer } from "react";


const initialState={
    user:{
        
    }
}

const reducer=()=>{
    switch(action.type){
        case 'LOGIN':
            return{
                ...state,
                user:action.payload
            }
        default:
            return state;
    }
}


export const store = createContext();


export const storeProvider = ({children}) =>{
    const[state, dispatch] = useReducer(reducer, initialState);
    const value = {state, dispatch}
    return <store.Provider value={value}>
        {children}
    </store.Provider>
}