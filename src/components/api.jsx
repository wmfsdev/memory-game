
   export const fetchData = async (controller) => {
      return fetch(`https://api.thecatapi.com/v1/images/search?limit=10`, 
         { signal: controller.signal }, 
         { mode: 'cors' })
      .then(function(response) {
         return response.json()
      })
      .then(function(response) {
         controller = null
         return response
      })
      .catch(function(error) {
         return []
      })
   }