import { useCallback, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import LoadingScreen from './components/LoadingScreen';
import Confetti from './components/Confetti';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Writing from './pages/Writing';
import Post from './pages/Post';
import Now from './pages/Now';
import Stress from './pages/Stress';
import Credits from './pages/Credits';
import NotFound from './pages/NotFound';
import Updates from './pages/Updates';
import Roadmap from './pages/Roadmap';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [celebrating, setCelebrating] = useState(false);
  const location = useLocation();

  const handleLoadingComplete = useCallback(() => {
    setCelebrating(true);
  }, []);

  const finishLoading = useCallback(() => {
    setLoading(false);
    setCelebrating(true);
  }, []);

  return (
    <>
      {celebrating && <Confetti onComplete={() => setCelebrating(false)} />}
      {loading ? (
        <LoadingScreen onComplete={handleLoadingComplete} onFinish={finishLoading} />
      ) : (
        <div className="app-backdrop">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/writing/:slug" element={<Post />} />
            <Route path="/now" element={<Now />} />
            <Route path="/stress" element={<Stress />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
        </div>
      )}
    </>
  );
}
