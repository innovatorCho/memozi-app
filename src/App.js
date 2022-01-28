import './App.css';

import TextLenPage from './pages/TextLenPage';
import WordCrossPage from './pages/WordCrossPage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TextLenPage />} />
        <Route path="/wordquiz" element={<WordCrossPage />} />
      </Routes>
    </Router>
  );
}

export default App;
