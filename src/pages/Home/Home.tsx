// This page is the Login with spotify button
import { AUTH_URL } from "../../utils/constants";

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