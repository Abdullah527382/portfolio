import { Routes, Route} from "react-router-dom";
import ProjectPage from './routes/project';
import Navbar from './components/navbar/navbar';
import HomeRoute from './routes/home';
import Footer from './components/footer/footer';
import './App.css';
import ExperiencePage from "./pages/experience/experience";
function App() {
  return (
    <div className="body">
      <Navbar />
      <Routes>
        <Route  path="/" element={<HomeRoute />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;