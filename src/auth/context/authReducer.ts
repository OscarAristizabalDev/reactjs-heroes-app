import { AuthState } from "../interfaces/interfaces";
import { AuthAction } from "../types/types";

// un reducer trabaja con el estado inicial y un conjunto de acciones
export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'login':
            return {
                ...state, // Esto permite mantener los demas variables del state
                user: action.payload
            }

        case 'logout':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}