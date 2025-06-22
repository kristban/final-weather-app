import { useState } from 'react'
import Weather from './Weather'

import './App.css'

export default function App() {
  return (
    <div className="App">
      <div className="container">
        
        <Weather defaultCity="Bernbug"/>
        
      </div>
    </div>
  )
}

