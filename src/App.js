import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import NewArticle from './pages/NewArticle';
import News from './pages/News';
import Home from './pages/Home';
import ExplorePage from './pages/ExplorePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/Publish" element={<NewArticle />} exact/>
        <Route path="/Explore/:id" element={<News />} exact/>
        <Route path="/Explore" element={<ExplorePage />} exact />
      </Routes>      
    </Router>
  );
}

export default App;
