import React from "react"
import { render, screen } from "@testing-library/react"

import { AppRouter } from "../../src/router/AppRouter"
import { AuthContext } from "../../src/auth"
import { AuthState } from "../../src/auth/interfaces/interfaces"
import { AuthContextProps } from "../../src/auth/types/types"
import { MemoryRouter } from "react-router-dom"

describe('Pruebas en <AppRouter />', () => {

    // test('Debe de mostrar el login si no esta autenticado', () => {

    //     const authState: AuthState = {
    //         user: {
    //             id: '',
    //             name: '',
    //             logged: false
    //         }
    //     }

    //     const contextValue: AuthContextProps = {
    //         authState,
    //         login: (name: string) => { },
    //         logout: () => { }
    //     }

    //     render(
    //         <MemoryRouter initialEntries={['/marvel']}>
    //             <AuthContext.Provider value={contextValue}>
    //                 <AppRouter />
    //             </AuthContext.Provider>
    //         </MemoryRouter>
    //     )

    //     expect(screen.getAllByText('Login').length).toBe(2)
    //     // screen.debug()

    // });

    // test('debe mostrar el componente de marvel si esta autenticado', () => {

    //     const authState: AuthState = {
    //         user: {
    //             id: '',
    //             name: '',
    //             logged: true
    //         }
    //     }

    //     const contextValue: AuthContextProps = {
    //         authState,
    //         login: (name: string) => { },
    //         logout: () => { }
    //     }

    //     render(
    //         <MemoryRouter initialEntries={['/login']}>
    //             <AuthContext.Provider value={contextValue}>
    //                 <AppRouter />
    //             </AuthContext.Provider>
    //         </MemoryRouter>
    //     )

    //     expect(screen.getAllByText('Marvel').length).toBeGreaterThan(1)

    // })

})