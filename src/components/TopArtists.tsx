import { useEffect, useState } from "react";
import axios from "axios";
import { TOP_ARTISTS_ENDPOINT } from "../utils/constants";
import ArtistCard from "./ContentCard";
import { Artist } from "../types";
import { Box, CircularProgress } from "@mui/material";



const TopArtists : React.FC = () => {
    const [artists, setArtists] = useState<Artist[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // Get access token when redirected to this page
    useEffect( () => {

        // Declare function
        const getTopArtists = async () =>{
            const token = window.localStorage.getItem("access_token");
            const refreshToken = window.localStorage.getItem("refresh_token");

            try {
                const response = await axios.get(TOP_ARTISTS_ENDPOINT,{
                    headers: {
                        'Authorization' : `Bearer ${token}`,
                        'Refresh-Token' : refreshToken,
                    },
                });
                
                setArtists(response.data.items);
                setIsLoading(false);

            } catch (error) {
                console.error("Error getting fetching TopArtists: ", error);
            }

        }

        // Execute function
        getTopArtists();
    }, []);

    return (
        <>
            {isLoading && <CircularProgress />}

            {artists &&
                <Box className="cards-container-wrapper">
                    <h2>MyTopArtists</h2>
                    <Box className="artist-cards-container">
                        {artists && artists.map((artist, index) => (
                            <ArtistCard key={index} content={artist} />
                        ))}
                    </Box>
                </Box>
            }
            
        </> 
    )

};

export default TopArtists;