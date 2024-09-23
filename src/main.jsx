import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/global.js'
import { Homepage } from './pages/Homepage/index.jsx'
import { StandardButton } from './components/StandardButton/index.jsx'
import { EventsCard } from './components/EventsCard/index.jsx'
import { Eventos } from './pages/Eventos/index.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles/>
    <Eventos />
  </StrictMode>,
)
