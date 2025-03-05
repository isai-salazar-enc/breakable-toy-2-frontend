export interface AuthContextType{
    accessToken: string | undefined;
    refreshToken: string | undefined;
    saveTokens: (accessToken: string | undefined, refreshToken: string | undefined) => void;
}

export interface TopArtistsInfo {
    name : string,
    genres : string[],
    images : string[Object],
};