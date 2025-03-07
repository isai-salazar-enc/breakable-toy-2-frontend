export const scopes = "user-read-private user-top-read";
    
export const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
export const REDIRECT_URI = "http://localhost:5173/callback";
export const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(scopes)}`;
export const AUTH_ENDPOINT = "http://localhost:8080/auth/spotify";

export const TOP_ARTISTS_ENDPOINT = "http://localhost:8080/me/top/artists";
export const SINGLE_ARTISTS_ENDPOINT = "http://localhost:8080/artists/";