import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import CustomTypical from './customWidget/CustomTypical.tsx'

import CustomButton from './customWidget/CustomButton.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <div className="customTyper">
      <CustomTypical  />
      <CustomButton />

  </div>


    <App />

  </StrictMode>,
)
