import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { AuthState, User } from "../interfaces/interfaces";
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

const initialize = (): AuthState => {
    let userValueStorage = localStorage.getItem('user');
    const user: User = (userValueStorage !== null) && JSON.parse(userValueStorage);

    return {
        user: {
            id: user.id,
            name: user.name,
            logged: user.logged
        }
    }

}

export const AuthProvider = ({ children }: AuthProviderProps) => {

    // se utiliza el hook useReducer para el manejo del estado en la autenticación
    const [authState, dispatch] = useReducer(authReducer, {}, initialize);

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

        localStorage.setItem('user', JSON.stringify(action.payload));

        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem('user');

        const action: AuthAction = {
            type: "logout",
            payload: {
                name: '',
                id: '',
                logged: false
            }
        }

        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{ authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
