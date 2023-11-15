import { useState, useEffect } from 'react'
import { Cards } from './components/card'
import './App.css'

function App() {
  
  const [data, setData] = useState([])
  const [cardChoice, setCardChoice] = useState([])
  const [results, setResults] = useState([])
  const [highScore, setHighScore] = useState(0)

 
  useEffect(() => {
    setData(["one", "two", "three"]) // mock API call
  //  console.log("you won", results)
  }, [results])

  const winCount = results.filter((result) => result === true)
 // console.log(winCount)

  
  return (
    <>
    <Cards
      cardChoice={cardChoice}
      setCardChoice={setCardChoice}
      data={data}
      setData={setData}
      results={results}
      setResults={setResults}
      highScore={highScore}
      setHighScore={setHighScore}>
    </Cards>
    <h1>Score: {cardChoice.length}</h1>
    <h2>High Score: {highScore}</h2>
    <h2>Wins: {`${winCount.length}/${results.length}`}</h2>
    
    </>
  )
 
}

export default App
