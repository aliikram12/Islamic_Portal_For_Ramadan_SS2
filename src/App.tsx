import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AnimatedIntro from './pages/AnimatedIntro';
import HomePortal from './pages/HomePortal';
import StudentProfile from './pages/StudentProfile';
import IslamicContent from './pages/IslamicContent';
import AboutPortal from './pages/AboutPortal';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedIntro />} />
        <Route path="/home" element={<HomePortal />} />
        <Route path="/profile/:rollNumber" element={<StudentProfile />} />
        <Route path="/islamic-content" element={<IslamicContent />} />
        <Route path="/about" element={<AboutPortal />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
