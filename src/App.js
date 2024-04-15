import React from 'react'
import Navbar from './components/Navbar'
import Board from './components/Board'
import MainSymbol from './components/MainSymbol'
import Chart from './components/Chart'
import Trade from './components/Trade'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='App-Flex'>
        <div>
          <Board />
          <MainSymbol />
          <Chart />
        </div>
        <Trade />
      </div>
    </div>
  )
}

export default App