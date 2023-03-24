"use strict";
(self["webpackChunkweather"] = self["webpackChunkweather"] || []).push([["src_scripts_data-finder_js"],{

/***/ "./src/scripts/data-finder.js":
/*!************************************!*\
  !*** ./src/scripts/data-finder.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataFinder)
/* harmony export */ });
class DataFinder {
    //Fetc background Image
    async fetchBackgroundImage (objectName) {
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
    async fetchWeatherData (city) {
        try {
            let response = await  fetch(`http://api.weatherapi.com/v1/current.json?key=8b14e702aca64276aaf111022231903&q=${city}&aqi=no`,
            {mode: 'cors'})
            
            response = await response.json()
            
            return response
        } catch (error) {
            console.log(` Weather data not found ${error}`)
        }
    }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NjcmlwdHNfZGF0YS1maW5kZXJfanMuOTY1MGNmMmViMTM1Yjg3YmIzZTEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsZ0lBQWdJLFdBQVc7QUFDM0ksYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELGlDQUFpQztBQUMxRjtBQUNBLFVBQVU7QUFDViw0Q0FBNEMsTUFBTTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJIQUEySCxLQUFLO0FBQ2hJLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixtREFBbUQsTUFBTTtBQUN6RDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3NjcmlwdHMvZGF0YS1maW5kZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YUZpbmRlciB7XHJcbiAgICAvL0ZldGMgYmFja2dyb3VuZCBJbWFnZVxyXG4gICAgYXN5bmMgZmV0Y2hCYWNrZ3JvdW5kSW1hZ2UgKG9iamVjdE5hbWUpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0ICBmZXRjaChgaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJhbnNsYXRlP2FwaV9rZXk9OTgybkZVY1JaaWxQdVFHVTVqV0xVWlRlUnEweUVkcFQmcz0ke29iamVjdE5hbWV9YCxcclxuICAgICAgICAgICAge21vZGU6ICdjb3JzJ30pXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFTZXQgPSBhd2FpdCBkYXRhXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtkYXRhU2V0LmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybH0pYFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgIEltYWdlIG5vdCBmb3VuZCAke2Vycm9yfWApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZmV0Y2hXZWF0aGVyRGF0YSAoY2l0eSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0ICBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PThiMTRlNzAyYWNhNjQyNzZhYWYxMTEwMjIyMzE5MDMmcT0ke2NpdHl9JmFxaT1ub2AsXHJcbiAgICAgICAgICAgIHttb2RlOiAnY29ycyd9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAgV2VhdGhlciBkYXRhIG5vdCBmb3VuZCAke2Vycm9yfWApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9