import { Box, Card, CardContent, CardMedia } from "@mui/material";
import { TopArtistsInfo } from "../types";

interface ArtistCardProps{
    content : TopArtistsInfo,
}


const ArtistCard : React.FC<ArtistCardProps> = ({ content }) => {
    return(
        <>
        <Card>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                src={content.images[0].url}
                alt="Artist photo"
            />
            <Box className="artist-card-content" >
                <CardContent sx={{ flex: '1 0 auto', alignItems: 'center' }}>
                    <h3>{ content.name }</h3>
                    <p>{ content.genres[0] }</p>
                </CardContent>
            </Box>
        </Card>
        </>
    )
};

export default ArtistCard