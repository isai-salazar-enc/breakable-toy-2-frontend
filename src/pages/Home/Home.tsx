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
        if (accessToken !== undefined && refreshToken !== undefined) {
          navigate('/dashboard');
        }
    }, [accessToken, navigate]);
      
    return (
        <div className="login-wrapper">
            <div className="login-card">
                <h1>Welcome !</h1>
                <a href={AUTH_URL}>
                    <button className="btn-green">Login with Spotify</button>
                </a>
            </div>
        </div>
    )
};

export default Home;