import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/global.js'
import { Homepage } from './pages/Homepage/index.jsx'
import { StandardButton } from './components/StandardButton/index.jsx'
import { FaleConosco } from './pages/FaleConosco/index.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles/>
    <FaleConosco />
  </StrictMode>,
)
