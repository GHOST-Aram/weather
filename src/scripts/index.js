import '../styles/styles.css'
const title = document.querySelector('title')
title.textContent = title.textContent.concat(`in ${'Nairobi'.toLocaleUpperCase()}`)

//Fetc background Image
async function fetchBackgroundImage (objectName) {
    try {
        const response = await  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=982nFUcRZilPuQGU5jWLUZTeRq0yEdpT&s=${objectName}`,
        {mode: 'cors'})
        const data = await response.json()

        const dataSet = await data
        
        document.body.style.backgroundImage = `url(${dataSet.data.images.original.url})`
        
    } catch (error) {
        console.log(` Image not found ${error}`)
    }
}
async function fetchWeatherData (city) {
    try {
        let response = await  fetch(`http://api.weatherapi.com/v1/current.json?key=8b14e702aca64276aaf111022231903&q=${city}&aqi=no`,
        {mode: 'cors'})

        response = await response.json()

        //

       
        return response
    } catch (error) {
        console.log(` Weather data not found ${error}`)
    }
}

//Weather Icon
// import('../images/Serengeti_sunset-1001.jpg').then(({default: icon} )=>{
//     document.querySelector('#weather-icon').src = icon
// }).catch((error)=>console.log(error))

// Fetch weather data from weather API
const cityName = 'Kisumu'
fetchWeatherData(cityName).then(data =>{

    const condition = data.current.condition.text
    //Set general condition
    document.querySelector('#general-condition').textContent = condition

    //Fetch background related to general condition
    fetchBackgroundImage(condition)
    
    console.log(data)

}).catch((error) => console.log(error))



