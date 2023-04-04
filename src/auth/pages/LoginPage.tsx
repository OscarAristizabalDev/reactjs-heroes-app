import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context";

export const LoginPage = () => {

    // useNavigate es un custom hook creado por react-router-dom para ayudarnos con la navegacion
    const navigate = useNavigate();

    // Mediante el useContext podemos acceder al contexto actual con la información que comparte
    const { login } = useContext(AuthContext);

    const onLogin = () => {

        login('Oscar Aristizabal');

        navigate('/', {
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
