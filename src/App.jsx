import { useState, useEffect } from 'react'
import { Cards } from './components/card'
// import { apiCall } from './components/api'
import './App.css'


function App() {
  
  const [data, setData] = useState([])
  const [cardChoice, setCardChoice] = useState([])
  const [results, setResults] = useState([])
  const [highScore, setHighScore] = useState(0)

  
 
  useEffect(() => {
    let controller = new AbortController
    fetch(`https://api.thecatapi.com/v1/images/search?limit=5`, 
      { signal: controller.signal }, 
      { mode: 'cors' })
      .then(function(response) {
        return response.json()
      })
      .then(function(response) {
        console.log(response)
        setData(response)
        controller = null
      })
      .catch(function(error) {
      console.log(error)
      })
      return () => controller?.abort()
  }, [results])


  const winCount = results.filter((result) => result === true)

  return (
    <>
    <div className='card-container'>
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
    </div>
    <h1>Score: {cardChoice.length}</h1>
    <h2>High Score: {highScore}</h2>
    <h2>Wins: {`${winCount.length}/${results.length}`}</h2>
    
    </>
  )
 
}

export default App
