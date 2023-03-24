import '../styles/styles.css'
import Displayer from './displayer.js'

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
    //Default city
    let cityName = 'Abu dhabi'

    window.addEventListener('load', ()=>{
        //Update footer
        const footerText = document.querySelector('footer p')
        footerText.textContent += new Date().getFullYear()

        //Get City name 
        const form = document.querySelector('form')

        //Add even tlistener
        form.addEventListener('submit', (e) =>{
            e.preventDefault()

            cityName = document.querySelector('input[type=text]').value.trim()
            //Format name
            cityName = cityName.charAt(0).toUpperCase().concat(cityName.slice(1).toLowerCase())

        })
    })
    //City name


    
    
    
    // Fetch weather data from weather API
    fetchWeatherData(cityName).then(data =>{
        
        //Get general weather condsition
        const condition = data.current.condition.text
        //Fetch background related to general condition
        fetchBackgroundImage(condition)
        
        //Import class
        import('./displayer.js').then(({default: Displayer}) =>{
            const displayer = new Displayer ()

            //Customize titles
            displayer.cutomizeTitles(cityName)
            
            // set condition
            displayer.displayGeneralCondition (condition)
    
    
            displayer.displayWeatherIcon(data)
    
            displayer.displayTemperature(data)
    
            displayer.displayHumidity(data)
            
            displayer.displayPressure(data)
            
            displayer.displayCloudCover(data)
    
            displayer.displayUVRadiation(data)
            
            displayer.displayWindData(data)
    
            displayer.displayPrecipitation(data)

        })    

    }).catch((error) => console.log(error))


