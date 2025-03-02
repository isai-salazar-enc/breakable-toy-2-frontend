import { createContext, useContext } from "react";

interface AuthContextType{
    accessToken: string | undefined;
    refreshToken: string | undefined;
    saveTokens: (accessToken: string | undefined, refreshToken: string | undefined) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuthContext(){
    const credentials = useContext(AuthContext);
    if(credentials === undefined){
        throw new Error("AuthContext cannot be used outside an AuthProvider");
    }
    return credentials;
}



