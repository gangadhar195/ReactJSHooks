import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeContext, ThemeProvider } from './ReactHooks/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
<ThemeContext.Provider value={ThemeProvider}>
    <App />
    </ThemeContext.Provider>
,
)
