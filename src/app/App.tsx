import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { SystemGrid } from './components/SystemGrid';
import { Background } from './components/Background';
import { MouseTrail } from './components/MouseTrail';

export default function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <Background />
      <SystemGrid />
      <MouseTrail />
      <div className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
