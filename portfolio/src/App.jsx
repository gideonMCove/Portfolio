import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Card />
      <Footer />

    </div>
  )
}

export default App
