import { createContext, useEffect } from "react"
import { useReducer } from "react"
const INITIAL_STATE = {
    user_name:JSON.parse(localStorage.getItem("user")) || null,
    loading:false,
    error:null
    }


export const AuthContext = createContext(INITIAL_STATE)

const AuthReducer =(state,action) =>{
    switch(action.type){
        case "LOGIN_START":
            return {
                user_name:null,
                loading:true,
                error:null
            }
            case "LOGIN_SUCCESS":
                return {
                    user_name:action.payload,
                    loading:false,
                    error:null
                }
                case "LOGIN_FAILURE":
                    return {
                        user_name:null,
                        loading:false,
                        error:action.payload
                    }
                case "LOGOUT":
                    return {
                        user_name:null,
                        loading:false,
                        error:null
                    }
            default:
            return state;
    }
}

export const AuthContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)
    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(state.user_name))
    },[state.user_name])

    return (
        <AuthContext.Provider value={{user_name:state.user_name, loading:state.loading, error:state.error, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}