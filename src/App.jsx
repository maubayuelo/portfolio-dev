import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProjectMeditationApp from "./pages/ProjectMeditationApp";
import ScrollToTopButton from "./components/ScrollToTopButton";
function App() {
  return (
    <Router basename="/dev">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/project-meditation-app/"
          element={<ProjectMeditationApp />}
        />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
