import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import FolkDressPage from "./pages/FolkDress";
import SouvenirPage from "./pages/Souvenir";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/folk-dress" element={<FolkDressPage />} />
          <Route path="/souvenirs" element={<SouvenirPage />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
