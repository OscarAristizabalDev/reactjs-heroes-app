import { Navigate } from "react-router-dom";
import { useAuth } from "../auth";

interface PublicRouterProps {
    // Los componentes hijos son de tipo JSX.Element
    children: JSX.Element;
}

export const PublicRoute = ({ children }: PublicRouterProps) => {
    
    const { user } = useAuth();
    const { logged } = user;
    
    // si el usuario esta autenticado muestro los componentes hijos
    // en caso contrario lo redirecciono a login
    return (!logged)
        ? children
        : <Navigate to="/marvel" />
}
