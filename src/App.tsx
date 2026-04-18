import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Enroll from './pages/Enroll';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/enroll" element={<Enroll />} />
    </Routes>
  );
}

export default App;
