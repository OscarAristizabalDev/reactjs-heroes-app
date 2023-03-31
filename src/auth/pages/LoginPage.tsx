import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

    // useNavigate es un custom hook creado por react-router-dom para ayudarnos con la navegacion
    const navigate = useNavigate();

    const onLogin = () => {
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
