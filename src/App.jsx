import { useState, useEffect } from 'react'
import { Cards } from './components/card'
import './App.css'

function App() {
  
  const [data, setData] = useState([])
  const [cardChoice, setCardChoice] = useState([])
  const [wins, setWins] = useState(0)
 
  useEffect(() => {
    setData(["one", "two", "three", "four", "five"])
    console.log("you won", wins)
  }, [wins])

  return (
    <>
    <Cards
      cardChoice={cardChoice}
      setCardChoice={setCardChoice}
      data={data}
      setData={setData}
      setWins={setWins}>
    </Cards>
    <h1>Score: {cardChoice.length}</h1>
    <h2>Wins: {wins}</h2>
    </>
  )
 
}

export default App
