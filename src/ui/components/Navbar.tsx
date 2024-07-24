
import React from "react"

import { Link, NavLink, useNavigate } from "react-router-dom"

import { useAuth } from "../../auth";

export const Navbar = () => {

    // Accedemos al context
    const { user, logout } = useAuth();
    const { name } = user;

    // useNavigate es un custom hook creado por react-router-dom para ayudarnos con la navegacion
    const navigate = useNavigate();

    const onLoggout = () => {

        logout();
        // al cerrar sesión se navega al login
        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    {/* mediante el isActive se agrega la clase cuando se selecciona el link actual */}
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/search"
                    >
                        Seacrh
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-primary">
                        {name}
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={onLoggout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}