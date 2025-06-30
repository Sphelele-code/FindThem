import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import CountryList from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h2>Country list</h2>
    <CountryList />
  </StrictMode>,
)
