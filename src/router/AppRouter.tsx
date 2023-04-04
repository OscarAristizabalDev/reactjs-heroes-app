import { Route, Routes } from 'react-router-dom'

import { HeroesRoutes } from '../heroes'
import { LoginPage } from '../auth'
import { Navbar } from '../ui'
import { PrivateRoute, PublicRoute } from './'

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } />


                <Route path='/*' element={
                    // Al aplicar el PrivateRoute, permite que solo se muestre los componentes hijos "HeroesRoutes"
                    // Solo si el usuario esta autenticado
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                } />
            </Routes>
        </>
    )
}
