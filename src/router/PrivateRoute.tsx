import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth";
import { useMemo } from "react";

interface PrivateRouterProps {
    // Los componentes hijos son de tipo JSX.Element
    children: JSX.Element;
}

export const PrivateRoute = ({ children }: PrivateRouterProps) => {

    const { user } = useAuth();
    const { logged } = user;

    // el custom hook de react-router-dom useLocation permite obtener los valores de la ruta actual
    const { pathname, search } = useLocation();

    // const lastPage = useMemo(() => {
    //     pathname + search;
    // }, [pathname, search])

    // if (lastPage !== null) {
    //     localStorage.setItem('lastPath', lastPage);
    // }

    const lastPage = pathname + search;
    localStorage.setItem('lastPath', lastPage);

    // si el usuario esta autenticado muestro los componentes hijos
    // en caso contrario lo redirecciono a login
    return (logged)
        ? children
        : <Navigate to="/login" />
}
