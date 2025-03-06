export interface AuthContextType{
    accessToken: string | undefined;
    refreshToken: string | undefined;
    saveTokens: (accessToken: string | undefined, refreshToken: string | undefined) => void;
}

export interface Artist{
    type : "artist",
    name : string,
    images : Image[],
    genres : string[],
    followers : { total : number},
}

export interface Album {
    type : "album",
    name : string,
    images : Image[],
    release_date : string,
}

export interface Image {
    url : string,
    width : number,
}

export interface Track {
    album : Album,
    name : string,
    duration_ms : number,
}