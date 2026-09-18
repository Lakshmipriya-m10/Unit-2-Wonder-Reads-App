import './App.css';
import Navbar from './Components/pages/Navbar.jsx';
import Footer from './Components/pages/Footer.jsx';
import { Routes, Route } from 'react-router-dom';

import Home from "./Components/pages/Home.jsx";
import About from "./Components/pages/About.jsx";
import Reading from "./Components/pages/Reading.jsx";
import StoryForm from "./Components/pages/StoryForm.jsx";
import MiniGames from "./Components/pages/MiniGames.jsx";
import ReadingCards from './Components/pages/ReadingCard.jsx';
import ProtectedRoute from "./Components/pages/ProtectedRoute.jsx";
import Quiz from './Components/pages/Quiz.jsx';
import MemoryFlip from './Components/pages/MemoryFlip.jsx';
import ButterflyGame from './Components/pages/ButterflyGame.jsx';
import FruitSlice from './Components/pages/FruitSlice.jsx';
import Grade1Reading from './Components/pages/Grade1Reading.jsx';
import Grade2Reading from './Components/pages/Grade2Reading.jsx';
import Grade3Reading from './Components/pages/Grade3Reading.jsx';
import Grade4Reading from './Components/pages/Grade4Reading.jsx';
import Grade5Reading from './Components/pages/Grade5Reading.jsx';
import OwnStories from './Components/pages/OwnStories.jsx';


function App() {
  return (
    <div className="container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
            } />
          <Route path="/Reading" element={
            <ProtectedRoute>
              <ReadingCards />
            </ProtectedRoute>
            } />
          <Route path="/Quiz" element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
            } />
          <Route path="/StoryForm" element={
          <ProtectedRoute>
          <StoryForm />
          </ProtectedRoute>
          } />
          <Route path="/MiniGames" element={
            <ProtectedRoute>
            <MiniGames />
            </ProtectedRoute>
          } />
          <Route path="/MemoryFlip" element={
            <ProtectedRoute>
            <MemoryFlip />
            </ProtectedRoute>
          } />
          <Route path="/ButterflyGame" element={
            <ProtectedRoute>
            <ButterflyGame />
            </ProtectedRoute>
          } />
          <Route path="/FruitSlice" element={
            <ProtectedRoute>
            <FruitSlice />
            </ProtectedRoute>
          } />
          <Route path="/Grade1Reading" element={
            <ProtectedRoute>
            <Grade1Reading />
            </ProtectedRoute>
          } />
          <Route path="/Grade2Reading" element={
            <ProtectedRoute>
            <Grade2Reading />
            </ProtectedRoute>
          } />
          <Route path="/Grade3Reading" element={
            <ProtectedRoute>
            <Grade3Reading />
            </ProtectedRoute>
          } />
          <Route path="/Grade4Reading" element={
            <ProtectedRoute>
            <Grade4Reading />
            </ProtectedRoute>
            } />
          <Route path="/Grade5Reading" element={
            <ProtectedRoute>
            <Grade5Reading />
            </ProtectedRoute>
          } />
          <Route path="/OwnStories"  element={
            <ProtectedRoute>
            <OwnStories />
            </ProtectedRoute>
           } />
          
        </Routes>
      </main>
      <Footer />

    </div>
  );
}

export default App;

