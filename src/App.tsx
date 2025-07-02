import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="microfrontend-container">
      <h1>Mi Microfrontend React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Contador: {count}
        </button>
        <p>
          Este es un microfrontend independiente construido con React, Vite y Single-SPA
        </p>
      </div>
    </div>
  )
}

export default App