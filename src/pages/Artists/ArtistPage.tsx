import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import { SINGLE_ARTISTS_ENDPOINT } from "../../utils/constants";
import { Album, Artist, Track } from "../../types";
import { Button, CircularProgress} from "@mui/material";

import ArtistBox from "../../components/ArtistBox";
import PopularSongsTable from "../../components/PopularSongsTable";
import DiscographyBox from "../../components/DiscographyBox";
import { useAuthContext } from "../../context/AuthContext";

const SingleArtist : React.FC = () => {
    const { id } = useParams();
    const [artist, setArtists] = useState<Artist | null>(null);
    const [tracks, setTracks] = useState<Track[] | null>(null);
    const [albums, setAlbums] = useState<Album[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { accessToken, refreshToken, saveTokens } = useAuthContext();
    const navigate = useNavigate();

    // Get access token when redirected to this page
    const getArtistInfo = async () =>{
        const endPoint : string = SINGLE_ARTISTS_ENDPOINT + id;

        try {
            const response = await axios.get(endPoint,{
                headers: {
                    'Authorization' : `Bearer ${accessToken}`,
                    'Refresh-Token' : refreshToken,
                },
            });
            
            setArtists(response.data.artist);
            setTracks(response.data.top_tracks.tracks);
            setAlbums(response.data.albums.items);
            setIsLoading(false);

        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.data.status === 401){
                saveTokens(undefined, undefined);
                window.localStorage.clear();
                navigate("/");
            }
        }

    }

    // Use function
    useEffect( () => {
        getArtistInfo();
    }, []);

    return ( 
        <>
            <a href="/dashboard">
                <Button variant="contained" className="btn-back" sx={{marginBottom:"12px"}}>GO BACK</Button>
            </a>
            <br></br>
            { isLoading && <CircularProgress /> }
            {/* -------- Artist, popular songs and albums -------- */}
            { artist &&  <ArtistBox artist={artist}/> }
            { tracks && <PopularSongsTable tracks={tracks} tableTitle="Popular songs"/> }
            { albums && <DiscographyBox albums={albums} /> }
        </>
    )
};

export default SingleArtist;