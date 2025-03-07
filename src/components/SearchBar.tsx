import React, { useState, useEffect } from "react";
import { Box, TextField } from "@mui/material";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";
import { SEARCH_ENDPOINT } from "../utils/constants";
import { Album, Artist } from "../types";
import SearchItem from "./SearchItem";
import { useNavigate } from "react-router";

const SearchBar: React.FC = ({ }) => {
    const [query, setQuery] = useState("");
    const [albums, setAlbums] = useState<Album[] | null>(null);
    const [artists, setArtists] = useState<Artist[] | null>(null);
    const { accessToken, refreshToken, saveTokens } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!query) {
            setArtists(null);
            setAlbums(null);
            setQuery("");
            return;
        } // If query is empty, do not search

       // Execute fetch query if user has not typed for 500ms
        const delayDebounceFn = setTimeout( async() => {
            try {
                const response = await axios.get(SEARCH_ENDPOINT, {
                    headers: {
                        'Authorization' : `Bearer ${accessToken}`,
                        'Refresh-Token' : refreshToken,
                    },
                    params: {
                        'query' : query,
                    }
                });
                setAlbums(response.data.albums.items);
                setArtists(response.data.artists.items);
            } catch (error) {
                if (axios.isAxiosError(error) && error.response?.data.status === 401){
                    saveTokens(undefined, undefined);
                    window.localStorage.clear();
                    navigate("/");
                }
            }
        }, 650);

        return () => clearTimeout(delayDebounceFn); // If user keeps typing, delete timeout and instructions (reset timeout)
    }, [query]);

    return (
        <Box >
            <Box className="search-wrapper">
                <TextField label="Search artists and albums" type="search" className="search-input" color="success" fullWidth onChange={(e) => setQuery(e.target.value)}/>
                <Box className="search-items-wrapper">
                    { albums && albums.map((album) => (
                        <SearchItem key={album.id} content={album}/>
                    ))}
                    { artists && artists.map((artist) => (
                        <SearchItem key={artist.id} content={artist} />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default SearchBar;
