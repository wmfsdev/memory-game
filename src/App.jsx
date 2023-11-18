import { useState, useEffect, useRef } from 'react'
import { Cards } from './components/card'
import './App.css'
import { fetchData } from './components/api'

function App() {
  
  const [data, setData] = useState([])
  const [cardChoice, setCardChoice] = useState([])
  const [results, setResults] = useState([])
  const [highScore, setHighScore] = useState(0)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const controller = new AbortController();
    const fetch = async (controller) => {
      setData(await fetchData(controller))
    }
    fetch(controller)
    return () => controller.abort()
  }, [results])


  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false)
      }, 2000);
      return () => clearTimeout(timer)
    }
  }, [loading]);

  const winCount = results.filter((result) => result === true)

 
  

  return (
    <>
    <h3>Good luck R and A!</h3>
    <div className='card-container'> 
    { loading && <div className='loading'>
      <div className='spinner'></div>
    </div> }
      <Cards
        cardChoice={cardChoice}
        setCardChoice={setCardChoice}
        data={data}
        setData={setData}
        results={results}
        setResults={setResults}
        highScore={highScore}
        setHighScore={setHighScore}
        setLoading={setLoading}
        >
      </Cards>
    </div>
    <h1>Score: {cardChoice.length}</h1>
    <h2>High Score: {highScore}</h2>
    <h2>Wins: {`${winCount.length}/${results.length}`}</h2>
    </>
  )
}

export default App
