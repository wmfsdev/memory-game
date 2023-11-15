
  export function Cards({cardChoice, setCardChoice, data, setData, results, setResults, highScore, setHighScore}) {

  function handleClick(e) {
    
    if (!cardChoice.includes(e.target.className)) {
      setCardChoice([...cardChoice, e.target.className])  
      handleHighScore(cardChoice)
      setData(shuffle(data))
    } else {
      setResults([...results, false])
      setCardChoice([])
    }
    if (cardChoice.length === data.length) {
      setCardChoice([...cardChoice, e.target.className])
      handleHighScore(data)
      setCardChoice([])
      setResults([...results, true])
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

  const list = data.map((ele, index) => {
    return <div key={index} onClick={handleClick} className={ele}>{ele}</div>
  });
  return list
  
  }


  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }