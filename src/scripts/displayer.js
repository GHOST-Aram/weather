export default class Displayer {
    cutomizeTitles (cityName) {
        //Customize Page title
        const title = document.querySelector('title')
        title.textContent = title.textContent.concat(`in ${cityName}`)
    
        //Customize Page heading
        const heading = document.querySelector('#city-name')
        heading.textContent = cityName
    }
    displayCloudCover (data) {
        //Set cloud
        const cloud = data.current.cloud
        document.querySelector('#cloud span').textContent = cloud
        
    }
    displayGeneralCondition(condition) {
        //Set general condition
        document.querySelector('#general-condition').textContent = condition
    }
    displayHumidity (data) {
        //Set Humidity
        const humidity = data.current.humidity
        document.querySelector('#humidity span').textContent = humidity
    }
    displayPrecipitation (data) {
        //Set Precicpitation
        const precipitation = data.current.precip_mm
        document.querySelector('#precipitation span').textContent = precipitation
    }
    displayPressure (data) {
        //Set pressure
        const pressure = data.current.pressure_mb
        document.querySelector('#pressure span').textContent = pressure
    }
    displayTemperature (data) {
        //Set temperature in celecius
        const tempC = data.current.temp_c
        document.querySelector('#temp-c span').textContent = tempC
        
        //Set fahrenheit temperature
        const tempF = data.current.temp_f
        document.querySelector('#temp-f span').textContent = tempF
        
    }
    
    displayWeatherIcon (data) {
        //Set Condition Icon
        const iconUrl = data.current.condition.icon
        document.querySelector('#weather-icon').src = iconUrl
    }
    displayWindData (data) {
        //Set Wind direction
        const windDirection = data.current.wind_dir
        document.querySelector('#wind-direction span').textContent = windDirection
        
        //Set Wind speed
        const windSpeed = data.current.wind_kph
        document.querySelector('#wind-speed span').textContent = windSpeed
    
        //Set Wind degree
        const windDegree = data.current.wind_degree
        document.querySelector('#wind-degree span').textContent = windDegree
    }
    displayUVRadiation (data) {
        //Set Uv
        const uv = data.current.uv
        document.querySelector('#uv span').textContent = uv
    }
    
}