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
fetchBackgroundImage('windy')