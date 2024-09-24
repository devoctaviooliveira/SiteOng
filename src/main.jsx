import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/global.js'
import { Homepage } from './pages/Homepage/index.jsx'
import { StandardButton } from './components/StandardButton/index.jsx'
import { EventsCard } from './components/EventsCard/index.jsx'
import { Donate } from './pages/Donate/index.jsx'
import { Adopt } from './pages/Adopt/index.jsx'

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/adopt",
    element: <Adopt/>,
  },
  {
    path: "/homepage",
    element: <Homepage/>,
  },
  {
    path: "/donate",
    element: <Donate/>,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles/>
    <RouterProvider router={router} />
  </StrictMode>,
)
