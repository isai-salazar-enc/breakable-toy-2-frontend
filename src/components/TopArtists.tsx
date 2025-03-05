import { useEffect, useState } from "react";
import axios from "axios";
import { ARTISTS_ENDPOINT } from "../utils/constants";
import ArtistCard from "./ArtistCard";
import { TopArtistsInfo } from "../types";



const TopArtists : React.FC = () => {
    const [artists, setArtists] = useState<TopArtistsInfo[] | null>(null);

    // Get access token when redirected to this page
    useEffect( () => {

        // Declare function
        const getTopArtists = async () =>{
            const token = window.localStorage.getItem("access_token");
            const refreshToken = window.localStorage.getItem("refresh_token");

            try {
                const response = await axios.get(ARTISTS_ENDPOINT,{
                    headers: {
                        'Authorization' : `Bearer ${token}`,
                        'Refresh-Token' : refreshToken,
                    },
                });
                
                setArtists(response.data.items);

            } catch (error) {
                console.error("Error getting fetching TopArtists: ", error);
            }

        }

        // Execute function
        getTopArtists();
    }, []);

    return (
        <>
            <h1>Hola</h1>
            {artists && artists.map((artist, index) => (
                <ArtistCard key={index} content={artist} />
            ))}
        </> 
    )

};

export default TopArtists;