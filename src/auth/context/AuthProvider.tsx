import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { AuthState } from "../interfaces/interfaces";

interface AuthProviderProps {
    // Los componentes hijos son de tipo JSX.Element
    children: JSX.Element | JSX.Element[];
}

const initialState : AuthState = {
    auth: {
        logged: false,
        name: ''
    }
}

export const AuthProvider = ({ children }: AuthProviderProps) => {

    // se utiliza el hook useReducer para el manejo del estado en la autenticación
    const [authState, dispatch] = useReducer(authReducer, initialState)

    return (
        <AuthContext.Provider value={null}>
            {children}
        </AuthContext.Provider>
    )
}
