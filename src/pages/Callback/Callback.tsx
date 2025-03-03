// This page receives the code from the authorization with spotify

import { useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useAuthContext } from "../../context/AuthContext";
import { AUTH_ENDPOINT } from "../../utils/constants";

const Callback = () => {
    const navigate = useNavigate();
    const { saveTokens } = useAuthContext();
    // TODO: if authenticated, send directly to dashboard
    // TODO: check that token is valid 

    // Get access token when redirected to this page
    useEffect( () => {

        // Declare function
        const getAccessToken = async () =>{
            const urlParams = new URLSearchParams(window.location.search);
            const code: string | null = urlParams.get("code");

            // If no code found, return to Home page
            if (!code) {
                console.log("Authorization code not found.");
                navigate("/");
                return;
            }

            try {
                const response = await axios.post(AUTH_ENDPOINT, { code });
                const accessToken = response.data.access_token;
                const refreshToken = response.data.refresh_token;

                // Save tokens in local storage
                saveTokens(accessToken, refreshToken);

                navigate("/Dashboard");

            } catch (error) {
                console.error("Error getting access token: ", error);
                navigate("/");
            }

        }

        // Execute function
        getAccessToken();
    }, [navigate]);


    return (
        <h2>Processing login...</h2>
    )
}

export default Callback;