import { useState, createContext, FC, PropsWithChildren, useContext } from "react";
import ReactDOM from "react-dom/client";
import { ContextType, StateType } from "./types";


const initialState: StateType = {
    isLoggedIn:Boolean(localStorage.getItem("token")) ,
    token:localStorage.getItem("token") || "",
    username:localStorage.getItem("username") || ""
}

export const LoginContext = createContext<ContextType>({
    login : ()=>null,
    logout : ()=>null,
    state: initialState
})

export const LoginProvider: FC<PropsWithChildren> = ({children})=>{
    const [state, setState] = useState<StateType>(initialState)
    const login = (token:string,username:string)=>{
        setState({
            username,
            token,
            isLoggedIn:true
        })

        localStorage.setItem("token",token)
        localStorage.setItem("username",username)
    }
    const logout = ()=>{
        setState({
            username:"",
            token:"",
            isLoggedIn:false
        })
        localStorage.setItem("token","")
        localStorage.setItem("username","")
    }

    return <LoginContext.Provider value={{
        login: login,
        logout:logout,
        state:state
    }}>

    {children}
    </LoginContext.Provider> 
}

export const useLoginContext = () => {
    const {state,login,logout} = useContext(LoginContext)
    return {
        username:state.username,
        isLoggedIn : state.isLoggedIn,
        login,
        logout
    }
}
