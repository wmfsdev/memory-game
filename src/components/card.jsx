
  export function Cards({cardChoice, setCardChoice, data, setData, results, setResults, highScore, setHighScore, setLoading}) {

  function handleClick(e) {
    if (cardChoice.includes(e.target.className)) {
      setCardChoice([])
      setLoading(true)
      setResults([...results, false])
    } else { 
      setCardChoice([...cardChoice, e.target.className])  
      handleHighScore(cardChoice)
      setData(shuffle(data))
    }
    checkWin()
  }

  function checkWin() {
    if (cardChoice.length + 1 === data.length) {  
      setLoading(true)
      setResults([...results, true])
      handleHighScore(data)
      setCardChoice([])
    }
  }

  function handleHighScore(state) {
    if (state === cardChoice) {
      if (cardChoice.length >= highScore) { 
        setHighScore(state.length + 1)
      }
    }
    if (state === data) {
      setHighScore(data.length)
    }
  }

  return (
    <>
      { data.map((obj) => (
        <img src={obj.url} key={obj.id} onClick={handleClick} className={obj.id}></img>
      ))}
    </>
  )
  }


  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }