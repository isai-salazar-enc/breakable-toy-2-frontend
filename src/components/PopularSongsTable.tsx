import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import { Track } from "../types";

interface PopularSongsTableProps {
    tracks : Track[]
}

// Miliseconds to minutes:seconds
const formatDuration = (miliseconds: number) => {
    const minutes = Math.floor(miliseconds / 60000);
    const seconds = ((miliseconds % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds.padStart(2, '0')}`;
};

const PopularSongsTable : React.FC<PopularSongsTableProps> = ({ tracks }) => {
    return(
        <>
            <h2>Popular songs</h2>
            <TableContainer>
                <Table sx={{ minWidth: 450 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell className="bold-table-header text-left">#</TableCell>
                        <TableCell className="bold-table-header text-left">Song Name</TableCell>
                        <TableCell className="bold-table-header text-left">Duration</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {tracks.map((track, index) => (
                        <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row" className="text-left">
                            {index}
                        </TableCell>
                        <TableCell className="text-left">{track.name}</TableCell>
                        <TableCell className="text-left">{formatDuration(track.duration_ms)}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default PopularSongsTable;