import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1 className="text-2xl font-bold">HBC Travel and Tours</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          up
        </button>
        &nbsp;
        <button onClick={() => setCount((count) => count - 1)}>
          down
        </button>
        <p>
          { count } 
        </p>
      </div>
      <p className="read-the-docs">
        Copyright 2025 &copy; HBC Travel and Tours. All rights reserved.
      </p>
    </>
  )
}

export default App
