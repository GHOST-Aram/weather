import '../styles/styles.css'
import DataFinder from './data-finder.js'

//Default city
let cityName = 'Abu dhabi'

import('./data-finder.js').then(({default:DataFinder}) =>{
    const finder = new DataFinder()
    // Fetch weather data from weather API
    finder.fetchWeatherData(cityName).then(data =>{
            
            //Get general weather condsition
            const condition = data.current.condition.text
            //finder.Fetch background related to general condition
            finder.fetchBackgroundImage(condition)
            
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
                
            }).catch((error) => console.log(error))    
            
        }).catch((error) => console.log(error))
        
        
        
    }) .catch((error)=>console.log(error))  
    
    
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

