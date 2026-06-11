import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MuseuPage from './pages/MuseuPage.tsx';
import MuseuAbertura from './components/MuseuAbertura.tsx';
import GalleryPage from './pages/GalleryPage.tsx'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <MuseuAbertura />,
  },
  {
    path: "/museu",
    element: <MuseuPage />,
  },
  {
    path: "/galeria/:section",  
    element: <GalleryPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)