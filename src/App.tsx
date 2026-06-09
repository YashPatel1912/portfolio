import { useTheme } from "./hooks/useTheme";
import {
  Header,
  Hero,
  About,
  Skills,
  Projects,
  // Experience,
  Education,
  Certifications,
  // Achievements,
  Contact,
  Footer,
} from "./components";

function App() {
  const { isDark } = useTheme();

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
        <Header />
        <main className="pt-16">
          <Hero />
          <About />
          <Skills />
          <Projects />
          {/* <Experience /> */}
          <Education />
          <Certifications />
          {/* <Achievements /> */}
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
