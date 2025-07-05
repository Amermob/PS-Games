import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PSG from './PSG.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PSG />
  </StrictMode>,
)
