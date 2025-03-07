import { Box, Chip } from "@mui/material"
import { Artist } from "../types"

interface ArtistBoxProps {
    artist : Artist
}

const ArtistBox : React.FC<ArtistBoxProps> = ({ artist }) => {
    return(
        <>
            <Box sx={{ display: "flex" }}>
                <img src={artist.images[0].url} alt={artist.name} className="artist-img" />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <h1 className="artist-name">{artist.name}</h1>
                    <Chip label={artist.followers.total.toLocaleString() + " followers"} color="primary" variant="outlined" />
                </Box>
            </Box>
        </> 
    )
}

export default ArtistBox;