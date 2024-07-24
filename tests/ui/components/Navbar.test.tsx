

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';

import { AuthState } from "../../../src/auth/interfaces/interfaces"
import { AuthContextProps } from "../../../src/auth/types/types"
import { AuthContext } from '../../../src/auth';
import { Navbar } from '../../../src/ui';


const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));


describe('Pruebas en <Navbar />', () => {

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
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks());

    test('debe de mostrar el nombre del usuario', () => {

        render(
            <AuthContext.Provider value={ contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter> 
            </AuthContext.Provider>
        );

        expect( screen.getByText('Oscar') ).toBeTruthy();
        // screen.debug()
    })

    test('debe de llamar el logout y navigate cuando se hace click en el botón', () => {

        render(
            <AuthContext.Provider value={ contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter> 
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click( logoutBtn );

        expect( contextValue.logout ).toHaveBeenCalled()
        expect( mockedUseNavigate ).toHaveBeenCalledWith('/login', {"replace": true})


    });

});