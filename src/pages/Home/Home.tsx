// This page is the Login with spotify button
// import { useNavigate } from "react-router";
// import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../context/AuthContext";
import { AUTH_URL } from "../../utils/constants";
import { useEffect } from "react";

const Home = () => {
    const {accessToken, refreshToken} = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (accessToken !== null && refreshToken !== null) {
          navigate('/dashboard');
        }
    }, [accessToken, navigate]);
      
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