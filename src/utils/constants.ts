export const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
export const REDIRECT_URI = "http://localhost:5173/callback";
export const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=user-read-private`
export const AUTH_ENDPOINT = "http://localhost:8080/auth/spotify";