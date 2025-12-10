import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BeautyQuiz from './pages/BeautyQuiz';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beauty-quiz" element={<BeautyQuiz />} />
      </Routes>
    </Router>
  );
}

export default App;
