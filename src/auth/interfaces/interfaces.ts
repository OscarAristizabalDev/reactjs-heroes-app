
export interface User {
    id: string
    name: string,
    logged: boolean,
}

export interface AuthState {
    user: User
}