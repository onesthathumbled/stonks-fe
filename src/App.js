import React from 'react'
import Navbar from './components/Navbar'
import Board from './components/Board'
import MainSymbol from './components/MainSymbol'
import Chart from './components/Chart'

const App = () => {
  return (
    <div>
      <Navbar />
      <Board />
      <MainSymbol />
      <Chart />
    </div>
  )
}

export default App