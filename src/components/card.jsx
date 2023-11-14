
  export function Cards({cardChoice, setCardChoice, data, setData, results, setResults}) {

  function handleClick(e) {
    console.log("clicked", e.target.className)

    if (!cardChoice.includes(e.target.className)) {
      setCardChoice([...cardChoice, e.target.className])
      setData(shuffle(data))
      console.log(data)
    } else {
      console.log( "no")
      setResults([...results, false])
      setCardChoice([])
    }
   
    if (cardChoice.length === data.length - 1) {
      setResults([...results, true])
      console.log(results)
      console.log("WIN")
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