import { useContext } from "react";
import { AuthContext } from "../context";


export const useAuth = () => {
    // Mediante el useContext podemos acceder al contexto actual con la información que comparte
    const { authState, login, logout } = useContext(AuthContext);
    const { user } = authState;


    return {
        authState,
        user,
        login,
        logout
    }
}