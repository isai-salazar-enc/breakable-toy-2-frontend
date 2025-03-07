import { useEffect, useState } from "react";
import axios from "axios";
import { TOP_ARTISTS_ENDPOINT } from "../utils/constants";
import ArtistCard from "./ContentCard";
import { Artist } from "../types";
import { Box, CircularProgress } from "@mui/material";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";



const TopArtists : React.FC = () => {
    const [artists, setArtists] = useState<Artist[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { accessToken, refreshToken, saveTokens } = useAuthContext();
    const navigate = useNavigate();

    // Get access token when redirected to this page
    useEffect( () => {
        // Declare function
        const getTopArtists = async () =>{

            try {
                const response = await axios.get(TOP_ARTISTS_ENDPOINT,{
                    headers: {
                        'Authorization' : `Bearer ${accessToken}`,
                        'Refresh-Token' : refreshToken,
                    },
                });
                
                setArtists(response.data.items);
                if(response.data.new_access_token && response.data.new_refresh_token){
                    saveTokens(response.data.new_access_token, response.data.new_refresh_token);
                }
                setIsLoading(false);

            } catch (error) {
                if (axios.isAxiosError(error) && error.response?.data.status === 401){
                    saveTokens(undefined, undefined);
                    window.localStorage.clear();
                    navigate("/");
                }
            }

        }

        // Execute function
        getTopArtists();
    }, [navigate]);

    return (
        <>
            {isLoading && <CircularProgress />}

            {artists &&
                <Box className="cards-container-wrapper">
                    <h2>My Top Artists</h2>
                    <Box className="artist-cards-container">
                        {artists && artists.map((artist) => (
                            <a key={artist.id} href={"/artist/" + artist.id}>
                                <ArtistCard content={artist} />
                            </a>
                        ))}
                    </Box>
                </Box>
            }
            
        </> 
    )

};

export default TopArtists;