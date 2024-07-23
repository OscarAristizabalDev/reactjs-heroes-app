import React from "react"
import { render, screen } from "@testing-library/react"

import { PublicRoute } from "../../src/router/PublicRoute"
import { AuthContext } from "../../src/auth"
import { AuthState } from "../../src/auth/interfaces/interfaces"
import { AuthContextProps } from "../../src/auth/types/types"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe('pruebas en <PublicRoute />', () => {

    test('Debe mostrar el children si no esta autenticado', () => {

        const authState: AuthState = {
            user: {
                id: '',
                name: '',
                logged: false
            }
        }

        const contextValue: AuthContextProps = {
            authState,
            login: (name: string) => { },
            logout: () => { }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Ruta publica')).toBeTruthy() // debe existir en el dom un texto con Ruta publica
        // screen.debug()
    });

    test('Debe navegar si esta autenticado', () => {

        const authState: AuthState = {
            user: {
                id: '1',
                name: 'Oscar',
                logged: true
            }
        }

        const contextValue: AuthContextProps = {
            authState,
            login: (name: string) => { },
            logout: () => { }
        }

        render(
            // se provee el contexto para saber el estado del usuario
            <AuthContext.Provider value={contextValue}> 
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Ruta publica</h1>
                            </PublicRoute>
                        } />
                        <Route path='marvel' element={<h1> Página marvel </h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        // screen.debug()
        expect(screen.getByText('Página marvel')).toBeTruthy() // debe existir en el dom un texto con Página marvel, lo cual indica que navego al estar autenticado

    });

})