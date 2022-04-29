import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import NewArticle from './pages/NewArticle';
import News from './pages/News';
import Home from './pages/Home';
import ExplorePage from './pages/ExplorePage';
import RegisterUser from './pages/RegisterUser';
import RegisterArtist from './pages/RegisterArtist';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/Publish" element={<NewArticle />} exact/>
        <Route path="/registerUser" element={<RegisterUser />} exact/>
        <Route path="/registerJourn" element={<RegisterArtist />} exact/>
        <Route path="/Explore/:id" element={<News />} exact/>
        <Route path="/Explore" element={<ExplorePage />} exact />
      </Routes>      
    </Router>
  );
}

export default App;