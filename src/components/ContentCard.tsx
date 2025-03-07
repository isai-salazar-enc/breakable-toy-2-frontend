import { Box, Card, CardContent, CardMedia } from "@mui/material";
import { Album, Artist } from "../types";

interface CardProps{
    content : Artist | Album,
}


const ArtistCard : React.FC<CardProps> = ({ content }) => {


    return(
        <>
        <Card>
            <CardMedia
                component="img"
                sx={{ width: 100 }}
                src={content.images[1].url}
                alt="Content image"
            />
            <Box className="artist-card-content" >
                <CardContent sx={{ flex: '1 0 auto', alignItems: 'center' }}>
                    <h3>{ content.name }</h3>
                    {content.type === 'artist' && content.genres && (
                        <p>{content.genres[0]}</p>
                    )}
                    {content.type === 'album' && content.release_date && (
                       <p>{new Date(content.release_date).getFullYear()}</p>
                    )}
                </CardContent>
            </Box>
        </Card>
        </>
    )
};

export default ArtistCard