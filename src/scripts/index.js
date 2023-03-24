import '../styles/styles.css'

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

            console.log(cityName)
        })
    })
    //City name


    
    //Customize Page title
    const title = document.querySelector('title')
    title.textContent = title.textContent.concat(`in ${cityName}`)

    //Customize Page heading
    const heading = document.querySelector('#city-name')
    heading.textContent = heading.textContent.concat(` ${cityName}`)
    
    
    // Fetch weather data from weather API
    fetchWeatherData(cityName).then(data =>{
        

        //Set general condition
        const condition = data.current.condition.text
        document.querySelector('#general-condition').textContent = condition

        //Fetch background related to general condition
        fetchBackgroundImage(condition)

        //Set Condition Icon
        const iconUrl = data.current.condition.icon
        document.querySelector('#weather-icon').src = iconUrl

        //Set temperature in celecius
        const tempC = data.current.temp_c
        document.querySelector('#temp-c span').textContent = tempC
        
        //Set fahrenheit temperature
        const tempF = data.current.temp_f
        document.querySelector('#temp-f span').textContent = tempF

        //Set Humidity
        const humidity = data.current.humidity
        document.querySelector('#humidity span').textContent = humidity
        
        //Set pressure
        const pressure = data.current.pressure_mb
        document.querySelector('#pressure span').textContent = pressure
        
        //Set cloud
        const cloud = data.current.cloud
        document.querySelector('#cloud span').textContent = cloud

        //Set Uv
        const uv = data.current.uv
        document.querySelector('#uv span').textContent = uv
        
        //Set Wind direction
        const windDirection = data.current.wind_dir
        document.querySelector('#wind-direction span').textContent = windDirection
        
        //Set Wind speed
        const windSpeed = data.current.wind_kph
        document.querySelector('#wind-speed span').textContent = windSpeed

        //Set Wind degree
        const windDegree = data.current.wind_degree
        document.querySelector('#wind-degree span').textContent = windDegree

        //Set Precicpitation
        const precipitation = data.current.precip_mm
        document.querySelector('#precipitation span').textContent = precipitation

    }).catch((error) => console.log(error))



