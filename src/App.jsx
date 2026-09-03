import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickStats from './components/QuickStats';
import About from './components/About';
import WhatIDo from './components/WhatIDo';
import Skills from './components/Skills';
import FullStackArchitecture from './components/FullStackArchitecture';
import Projects from './components/Projects';
import { Education, Journey } from './components/Education';
import CurrentlyLearning from './components/CurrentlyLearning';
import Achievements from './components/Achievements';
import GitHubActivity from './components/GitHubActivity';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import LoadingScreen from './components/LoadingScreen';
import InteractiveBackground from './components/ui/InteractiveBackground';
import NotFound from './pages/NotFound';

function HomePage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-cyan-500 focus:px-4 focus:py-2 focus:text-slate-950 font-semibold shadow-xl"
      >
        Skip to main content
      </a>
      <InteractiveBackground />
      <Navbar />
      <main id="main-content" className="relative z-10">
        <Hero />
        <QuickStats />
        <About />
        <WhatIDo />
        <Skills />
        <FullStackArchitecture />
        <Projects />
        <Journey />
        <Education />
        <CurrentlyLearning />
        <Achievements />
        <GitHubActivity />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LoadingScreen />
      <ScrollProgress />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
