import { authReducer } from "../../../src/auth/context/authReducer"
import { AuthState } from "../../../src/auth/interfaces/interfaces";
import { AuthAction } from "../../../src/auth/types"

describe('pruebas en authReduce', () => {

    test('debe de retornar el estado por defecto', () => {
        const state = authReducer({ id: "", name: "", logged: false }, {});
        expect(state).toEqual({ id: "", name: "", logged: false })
    })

    test('debe de llamar el login autenticar y establecer el usuario', () => {

        const action: AuthAction = {
            type: "login",
            payload: {
                id: "1",
                name: "Oscar"
            }
        }

        const state = authReducer({ logged: true }, action);
        expect(state).toEqual({
            user: action.payload,
            logged: true
        })

    })

    test('debe de (logout) borrar el nombre del usuario y logged en false ', () => {

        const action: AuthAction = {
            type: "logout",
        }

        const state = authReducer({ logged: false }, action);

        expect(state).toEqual({
            user: action.payload,
            logged: false
        })

    })

});