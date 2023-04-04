import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { AuthState } from "../interfaces/interfaces";
import { AuthAction } from "../types/types";

interface AuthProviderProps {
    // Los componentes hijos son de tipo JSX.Element
    children: JSX.Element | JSX.Element[];
}

const initialState: AuthState = {
    user: {
        id: '',
        name: '',
        logged: false
    }
}

export const AuthProvider = ({ children }: AuthProviderProps) => {

    // se utiliza el hook useReducer para el manejo del estado en la autenticación
    const [authState, dispatch] = useReducer(authReducer, initialState);

    // Esta función será compartida a todos los componentes mediante el provider
    // Al ser compartido, todos los demas componentes podrán hacer uso de la función
    const login = (name: string = '') => {
        const action: AuthAction = {
            type: "login",
            payload: {
                name,
                id: '123',
                logged: true,
            }
        }
        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{ authState, login }}>
            {children}
        </AuthContext.Provider>
    )
}
