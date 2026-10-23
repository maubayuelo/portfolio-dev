import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProjectMeditationApp from "./pages/ProjectMeditationApp";
import ProjectDesignSystem from "./pages/ProjectDesignSystem";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <Router basename="/dev">
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/project-meditation-app/"
          element={<ProjectMeditationApp />}
        />
        <Route
          path="/project-shamanicca-design-system/"
          element={<ProjectDesignSystem />}
        />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
