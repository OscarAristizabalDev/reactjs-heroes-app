import { AuthState, User } from "../interfaces/interfaces";

export type AuthAction =
    | { type: 'login', payload: User }
    | { type: 'logout', payload: User }

export type AuthContextProps = {
    authState: AuthState,
    login: (name: string) => void
}