import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './index.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <footer>
          This project was coded by Kristin and is{" "}
          <a href="https://github.com/kristban/final-weather-app" target="blank">open-sourced on Github</a>
        </footer>
  </StrictMode>,
)
