import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import State from './State'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <State />
  </StrictMode>,
)