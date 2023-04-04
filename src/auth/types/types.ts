import { Auth } from "../interfaces/interfaces";



export type AuthAction = 
    | { type : 'login', payload: Auth }
    | { type : 'logout', payload: Auth }