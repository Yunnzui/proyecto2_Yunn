import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Description from './components/Description'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Description/>
  </StrictMode>,
)
