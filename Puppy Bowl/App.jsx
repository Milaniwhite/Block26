import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllPlayers from './AllPlayers';
import SinglePlayer from './SinglePlayer';
import Navbar from './NavBar.jsx'; 

function App() {
  return (
    <BrowserRouter>
      <Navbar />  

      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
      </Routes>
    </BrowserRouter>
  );
}
