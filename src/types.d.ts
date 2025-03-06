export interface AuthContextType{
    accessToken: string | undefined;
    refreshToken: string | undefined;
    saveTokens: (accessToken: string | undefined, refreshToken: string | undefined) => void;
}

export interface TopArtistsInfo {
    name : string,
    genres : string[],
    images : Image[],
};

export interface SingleArtistInfo {
    name : string,
    images : Image[],
    followers : number,

}

export interface Album {
    name : string,
    images : Image[],
}

export interface Image {
    url : string,
    width : number,
}