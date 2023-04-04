import { useNavigate } from "react-router-dom"

import { useAuth } from "../hooks";

export const LoginPage = () => {

    // useNavigate es un custom hook creado por react-router-dom para ayudarnos con la navegacion
    const navigate = useNavigate();

    // Mediante el custom hook useAuth puedo acceder al useContext
    const { login } = useAuth();

    const onLogin = () => {

        // En caso de ser nulo se envía a '/'
        const lastPage = localStorage.getItem('lastPath') || '/';

        console.log(lastPage)

        login('Oscar Aristizabal');

        navigate(lastPage, {
            replace: true
        })
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={onLogin}
            >
                Login
            </button>
        </div>
    )
}
