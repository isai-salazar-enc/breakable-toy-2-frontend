// This page is the Login with spotify button
const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = "http://localhost:5173/callback";
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=user-read-private`

const Home = () => {
    return (
        <div>
            <h1>Welcome to My Spotify App</h1>
            <a href={AUTH_URL}>
                <button className="btn-green">Login with Spotify</button>
            </a>
        </div>
    )
};

export default Home;