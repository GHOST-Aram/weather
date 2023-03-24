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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NjcmlwdHNfZGF0YS1maW5kZXJfanMuYjFmODQ1YmM3ZTM4MzA0MGFkMzAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsZ0lBQWdJLFdBQVc7QUFDM0ksYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELGlDQUFpQztBQUMxRjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkhBQTJILEtBQUs7QUFDaEksYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zY3JpcHRzL2RhdGEtZmluZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFGaW5kZXIge1xyXG4gICAgLy9GZXRjIGJhY2tncm91bmQgSW1hZ2VcclxuICAgIGFzeW5jIGZldGNoQmFja2dyb3VuZEltYWdlIChvYmplY3ROYW1lKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCAgZmV0Y2goYGh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzL3RyYW5zbGF0ZT9hcGlfa2V5PTk4Mm5GVWNSWmlsUHVRR1U1aldMVVpUZVJxMHlFZHBUJnM9JHtvYmplY3ROYW1lfWAsXHJcbiAgICAgICAgICAgIHttb2RlOiAnY29ycyd9KVxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBkYXRhU2V0ID0gYXdhaXQgZGF0YVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7ZGF0YVNldC5kYXRhLmltYWdlcy5vcmlnaW5hbC51cmx9KWBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBmZXRjaFdlYXRoZXJEYXRhIChjaXR5KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgIGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9OGIxNGU3MDJhY2E2NDI3NmFhZjExMTAyMjIzMTkwMyZxPSR7Y2l0eX0mYXFpPW5vYCxcclxuICAgICAgICAgICAge21vZGU6ICdjb3JzJ30pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=