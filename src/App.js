import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Inspiration from "./components/Inspiration";
import Generator from "./components/Generator";
import Footer from "./components/Footer";
import AIArtGenerator from "./components/Aigenerator";
import TextGenerate from "./pages/TextGenerate";
import "./App.css";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isTextGeneratePage = location.pathname === "/text-generate";

  return (
    <div className="App">
      {!isTextGeneratePage && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<AIArtGenerator />} />
          <Route path="/text-generate" element={<TextGenerate />} />
        </Routes>
        {!isTextGeneratePage && <Inspiration />}
        {/* {!isTextGeneratePage && <Generator />} */}
      </main>
      {!isTextGeneratePage}
    </div>
  );
}

export default App;
