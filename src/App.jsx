import { useState } from 'react'
import Weather from './Weather'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <div className="container">
        
        <Weather />
        <footer>
          This project was coded by Kristin and is{" "}
          <a href="https://github.com/kristban/final-weather-app" target="blank">open-sourced on Github</a>
        </footer>
      </div>
    </div>
  )
}

