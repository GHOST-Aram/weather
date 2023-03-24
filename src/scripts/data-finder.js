export default class DataFinder {
    //Fetc background Image
    async fetchBackgroundImage (objectName) {
        try {
            const response = await  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=982nFUcRZilPuQGU5jWLUZTeRq0yEdpT&s=${objectName}`,
            {mode: 'cors'})
            const data = await response.json()
            
            const dataSet = await data
            
            document.body.style.backgroundImage = `url(${dataSet.data.images.original.url})`
            
        } catch (error) {
            console.error(error)
        }
    }
    async fetchWeatherData (city) {
        try {
            let response = await  fetch(`http://api.weatherapi.com/v1/current.json?key=8b14e702aca64276aaf111022231903&q=${city}&aqi=no`,
            {mode: 'cors'})
            
            response = await response.json()
            
            return response
        } catch (error) {
            console.error(error)
        }
    }
}