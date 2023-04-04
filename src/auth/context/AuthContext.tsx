import { createContext } from "react";
import { AuthContextProps } from "../types/types";


export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);
