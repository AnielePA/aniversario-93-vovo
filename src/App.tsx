import { BrowserRouter, Routes, Route } from "react-router-dom";
import MuseuAbertura   from "./components/MuseuAbertura";   
import MuseumPage   from "./pages/MuseuPage";
import GalleryPage  from "./pages/GalleryPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                  element={<MuseuAbertura />} />
        <Route path="/museu"             element={<MuseumPage />} />
        <Route path="/galeria/:section"  element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  );
}
