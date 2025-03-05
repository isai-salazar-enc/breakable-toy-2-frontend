export interface AuthContextType{
    accessToken: string | undefined;
    refreshToken: string | undefined;
    saveTokens: (accessToken: string | undefined, refreshToken: string | undefined) => void;
}