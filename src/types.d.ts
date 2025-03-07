export interface AuthContextType{
    accessToken: string | undefined;
    refreshToken: string | undefined;
    saveTokens: (accessToken: string | undefined, refreshToken: string | undefined) => void;
}

export interface Artist{
    type : "artist",
    id: string,
    name : string,
    images : Image[],
    genres : string[],
    followers : { total : number},
}

export interface Album {
    type : "album",
    id : string,
    name : string,
    images : Image[],
    release_date : string,
    total_tracks: number,
    artists: Artist[],
    tracks: Track[]
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