
const key = '1X0ado2nMFvkmKQ4Su7sX3kIXROV6i1D'
const quantity = 5

export function apiCall(setData) {

fetch(`https://api.thecatapi.com/v1/images/search?limit=5`, {mode: 'cors'})
.then(function(response) {
 // console.log(response)
  return response.json()
})
.then(function(response) {
   setData(response) // img.src = response.data.images.original.url
   
})
.catch(function(error) {
 console.log(error)
})

}