// TODO: Create and add components

import { useNavigate } from "react-router";
import SearchBar from "../../components/SearchBar";
import TopArtists from "../../components/TopArtists";
import { useAuthContext } from "../../context/AuthContext";
import { useEffect } from "react";

const Dashboard = () => {
    const {accessToken, refreshToken} = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (accessToken === undefined && refreshToken === undefined) {
          navigate('/');
        }
    }, [navigate]);

    return(
        <>
            <SearchBar />
            <TopArtists />
        </>
    )
};

export default Dashboard;