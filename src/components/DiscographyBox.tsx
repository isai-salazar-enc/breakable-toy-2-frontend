import { Box } from "@mui/material"
import ContentCard from "./ContentCard"
import { Album } from "../types"

interface DiscographyBoxProps {
    albums : Album[]
}

const DiscographyBox : React.FC<DiscographyBoxProps> = ({ albums }) =>{
    return(
        <>
            <h2>Discography</h2><Box sx={{ marginBottom: "14px" }}>
                <Box className="album-cards-container">
                    {albums.map((album, index) => (
                        <a href={"/album/" + album.id} key={index}>
                            <ContentCard content={album} />
                        </a>
                    ))}
                </Box>
            </Box>
        </>
    )
}

export default DiscographyBox;