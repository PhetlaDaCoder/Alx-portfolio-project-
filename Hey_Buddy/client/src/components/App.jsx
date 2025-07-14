import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Planner from './components/Planner';
import Chat from './components/Chat';
import CreateTask from '.components/CreateTask';
import QuoteFeed from './components/QuoteFeed';
import NavBar from './components/NavBar';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/create-task" element={<CreateTask />} />
        <Route path="/quotes" element={<QuoteFeed />} />
        <Route path="/navbar" element={<NavBar />} />
      </Routes>
    </Router>
  );
}
export default App;
