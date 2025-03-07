import { Box } from "@mui/material";
import { Album, Artist } from "../types"

interface SearchItemProps {
    content : Album | Artist | null,
}


const SearchItem : React.FC<SearchItemProps> = ({ content }) => {
    return(
        <>
            {content &&
                <a href={`/${content.type}/${content.id}`}>
                    <Box className="search-item">
                        <img src={content.images[2].url} alt={content.name + " image"} width={68}/>
                        <p>{content.name}</p>
                    </Box>
                </a>
            }
        </>
    );
}

export default SearchItem;