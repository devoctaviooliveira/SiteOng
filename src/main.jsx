import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/global.js'
import { Homepage } from './pages/Homepage/index.jsx'
import { StandardButton } from './components/StandardButton/index.jsx'
import { EventsCard } from './components/EventsCard/index.jsx'
import { Donate } from './pages/Donate/index.jsx'
import { Adopt } from './pages/Adopt/index.jsx'
import { About } from './pages/About/index.jsx'
import { FaleConosco } from './pages/FaleConosco/index.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />, 
  },
  {
    path: "/adopt",
    element: <Adopt />,
  },
  {
    path: "/homepage",
    element: <Homepage />,
  },
  {
    path: "/donate",
    element: <Donate />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/fale-conosco",  
    element: <FaleConosco />,
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles/>
    <RouterProvider router={router} />
  </StrictMode>,
)
