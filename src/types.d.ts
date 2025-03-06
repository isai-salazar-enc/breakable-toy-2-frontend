export interface AuthContextType{
    accessToken: string | undefined;
    refreshToken: string | undefined;
    saveTokens: (accessToken: string | undefined, refreshToken: string | undefined) => void;
}

export interface Artist{
    name : string,
    images : Image[],
    genres : string[],
    followers : { total : number},
}

export interface Album {
    name : string,
    images : Image[],
}

export interface Image {
    url : string,
    width : number,
}