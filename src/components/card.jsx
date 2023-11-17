
  export function Cards({cardChoice, setCardChoice, data, setData, results, setResults, highScore, setHighScore, setLoading}) {

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
    //  setLoading(true)
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

  function handleLoad(index) {
    if (index === data.length - 1) {
      // setTimeout(() => {
      //   setLoading(false)
      // }, 1000);
      console.log("test")
    }
  }

  return (
    <>
      { data.map((obj, index) => (
        <img src={obj.url} key={obj.id} onLoad={() => handleLoad(index)} onClick={handleClick} className={obj.id}></img>
      ))}
    </>
  )
  // const list = data.map((obj, index) => {
  //   return <img src={obj.url} key={obj.id} onLoad={() => handleLoad(index)} onClick={handleClick} className={obj.id}></img>
  // });

  // return list

  }


  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }