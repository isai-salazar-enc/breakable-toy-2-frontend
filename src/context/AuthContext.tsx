import { createContext, useContext } from "react";
import { AuthContextType } from "../types";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuthContext(){
    const credentials = useContext(AuthContext);
    if(credentials === undefined){
        throw new Error("AuthContext cannot be used outside an AuthProvider");
    }
    return credentials;
}



