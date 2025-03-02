// TODO: Create and add components

const Dashboard = () => {
    console.log("ACCESS: " + localStorage.getItem("access_token"));
    console.log("REFRESH: " + localStorage.getItem("refresh_token"));
    return(
        <h2>Dashboard</h2>
    )
};

export default Dashboard;