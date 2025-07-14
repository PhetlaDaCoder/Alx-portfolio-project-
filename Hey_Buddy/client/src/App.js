import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import NavBar from './components/NavBar';

// Pages
import Home from './components/Home';
import Planner from './components/Planner';
import Chat from './components/Chat';
import CreateTask from './components/CreateTask';
import QuoteFeed from './components/QuoteFeed';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Persistent Navigation Bar */}
        <NavBar />

        {/* Route-based Page Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/create-task" element={<CreateTask />} />
          <Route path="/quotes" element={<QuoteFeed />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
