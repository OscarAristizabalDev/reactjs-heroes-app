import React from "react"
import { render, screen } from "@testing-library/react"

import { PrivateRoute } from "../../src/router/PrivateRoute"
import { AuthContext } from "../../src/auth"
import { AuthState } from "../../src/auth/interfaces/interfaces"
import { AuthContextProps } from "../../src/auth/types/types"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe('Pruebas en <PrivateRoute />', () => {

    test('Debe mostrar el children si esta autenticado', () => {

        Storage.prototype.setItem = jest.fn();

        const authState: AuthState = {
            user: {
                id: '1',
                name: 'ewe',
                logged: true
            }
        }

        const contextValue: AuthContextProps = {
            authState,
            login: (name: string) => { },
            logout: () => { }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Ruta privada')).toBeTruthy() // debe existir en el dom un texto con Ruta publica
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
        // screen.debug()
    });

})