import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { } from 'react'
import './index.css'
import App from './App.tsx'
import { ProgressContextProvider } from '@/context/ProgressContext.tsx'

createRoot(document.getElementById('root')!).render(
  <ProgressContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ProgressContextProvider>,
)
