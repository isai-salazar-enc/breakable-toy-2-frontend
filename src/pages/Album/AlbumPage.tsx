import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

import { Album, Track } from "../../types";
import { SINGLE_ALBUM_ENDPOINT } from "../../utils/constants";

import { Box, Button, Chip, CircularProgress } from "@mui/material";
import PopularSongsTable from "../../components/PopularSongsTable";
import { useAuthContext } from "../../context/AuthContext";

const AlbumPage : React.FC = () => {
    const { id } = useParams();
    const [album, setAlbum] = useState<Album | null>(null);
    const [tracks, setTracks] = useState<Track[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const navigate = useNavigate();
    const { accessToken, refreshToken, saveTokens } = useAuthContext();

    useEffect( () => {
        getArtistInfo();
    }, []);

    // Get access token when redirected to this page
    const getArtistInfo = async () =>{
        const endPoint : string = SINGLE_ALBUM_ENDPOINT + id;

        try {
            const response = await axios.get(endPoint,{
                headers: {
                    'Authorization' : `Bearer ${accessToken}`,
                    'Refresh-Token' : refreshToken,
                },
            });
            
            setAlbum(response.data);
            setTracks(response.data.tracks.items);
            setIsLoading(false);

        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.data.status === 401){
                saveTokens(undefined, undefined);
                window.localStorage.clear();
                navigate("/");
            }
        }
    }

    return(
        <>
            <Button variant="contained" className="btn-back" sx={{marginBottom:"12px"}} onClick={() => { navigate(-1) }}>GO BACK</Button>
            <br />
            { isLoading && <CircularProgress /> }
            { album &&
                <Box display={"flex"} gap={"18px"} alignItems={"center"}>
                    <Box>
                        <img src={album.images[0].url} alt={album.name + " image"} width={160}/>
                    </Box>
                    <Box>
                        <h1>{album.name}</h1>
                        <p>Released in {new Date(album.release_date).getFullYear()}</p>
                        <p>{album.total_tracks} songs</p>
                        {album.artists.map( (artist, index) =>(
                            <a href={"/artist/" + artist.id}>
                                <Chip label={artist.name} key={index} sx={{ marginTop : "12px" }} />
                            </a>
                        ))}
                    </Box>
                </Box>
            }
            { tracks &&
                <PopularSongsTable tracks={tracks} tableTitle="Album songs"/>
            }
        </>
    )
}

export default AlbumPage;