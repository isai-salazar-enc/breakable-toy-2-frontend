import './App.css'
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './pages/Home/Home';
import Callback from './utils/SpotifyAuth/SpotifyAuth';
import Dashboard from './pages/Dashboard/Dashboard';
import { useState } from 'react';
import { AuthContext } from './context/AuthContext';
import SingleArtist from './pages/Artists/ArtistPage';

function App() {

  // TODO: Protect auth routes
  // Declare tokens for React Context, if available in local storage, set value.
  const [accessToken, setAccessToken] = useState<string | undefined>(localStorage.getItem("access_token")  || undefined);
  const [refreshToken, setRefreshToken] = useState<string | undefined>(localStorage.getItem("refresh_token") || undefined);

  // Function to save token in localstorage for React Context
  const saveTokens = (accessT: string | undefined, refreshT: string | undefined) => {
    setAccessToken(accessT);
    setRefreshToken(refreshT);
    if (accessT) localStorage.setItem("access_token", accessT);
    else localStorage.removeItem("access_token");

    if (refreshT) localStorage.setItem("refresh_token", refreshT);
    else localStorage.removeItem("refresh_token");
  };

  return (
    <AuthContext.Provider value={{ accessToken, refreshToken, saveTokens}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/callback' element={<Callback/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/artist/:id' element={<SingleArtist />}/>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
