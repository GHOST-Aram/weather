"use strict";
(self["webpackChunkweather"] = self["webpackChunkweather"] || []).push([["src_scripts_displayer_js"],{

/***/ "./src/scripts/displayer.js":
/*!**********************************!*\
  !*** ./src/scripts/displayer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Displayer)
/* harmony export */ });
class Displayer {
    cutomizeTitles (cityName) {
        
        //Format name
        if(cityName.includes(' ')){
            //Split-map-join
            cityName =cityName.split(' ').map(text =>text.charAt(0).toUpperCase().concat(text.slice(1).toLowerCase())).join(' ')
        } else {
            cityName = cityName.charAt(0).toUpperCase().concat(cityName.slice(1).toLowerCase())
        }
        



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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NjcmlwdHNfZGlzcGxheWVyX2pzLjI2ZTNhNDVhNTk0YzhkMDg1MGZiLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELFNBQVM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zY3JpcHRzL2Rpc3BsYXllci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5ZXIge1xyXG4gICAgY3V0b21pemVUaXRsZXMgKGNpdHlOYW1lKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9Gb3JtYXQgbmFtZVxyXG4gICAgICAgIGlmKGNpdHlOYW1lLmluY2x1ZGVzKCcgJykpe1xyXG4gICAgICAgICAgICAvL1NwbGl0LW1hcC1qb2luXHJcbiAgICAgICAgICAgIGNpdHlOYW1lID1jaXR5TmFtZS5zcGxpdCgnICcpLm1hcCh0ZXh0ID0+dGV4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKS5jb25jYXQodGV4dC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpKSkuam9pbignICcpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2l0eU5hbWUgPSBjaXR5TmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKS5jb25jYXQoY2l0eU5hbWUuc2xpY2UoMSkudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy9DdXN0b21pemUgUGFnZSB0aXRsZVxyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGl0bGUnKVxyXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGl0bGUudGV4dENvbnRlbnQuY29uY2F0KGBpbiAke2NpdHlOYW1lfWApXHJcbiAgICBcclxuICAgICAgICAvL0N1c3RvbWl6ZSBQYWdlIGhlYWRpbmdcclxuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHktbmFtZScpXHJcbiAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IGNpdHlOYW1lXHJcbiAgICB9XHJcbiAgICBkaXNwbGF5Q2xvdWRDb3ZlciAoZGF0YSkge1xyXG4gICAgICAgIC8vU2V0IGNsb3VkXHJcbiAgICAgICAgY29uc3QgY2xvdWQgPSBkYXRhLmN1cnJlbnQuY2xvdWRcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvdWQgc3BhbicpLnRleHRDb250ZW50ID0gY2xvdWRcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGRpc3BsYXlHZW5lcmFsQ29uZGl0aW9uKGNvbmRpdGlvbikge1xyXG4gICAgICAgIC8vU2V0IGdlbmVyYWwgY29uZGl0aW9uXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dlbmVyYWwtY29uZGl0aW9uJykudGV4dENvbnRlbnQgPSBjb25kaXRpb25cclxuICAgIH1cclxuICAgIGRpc3BsYXlIdW1pZGl0eSAoZGF0YSkge1xyXG4gICAgICAgIC8vU2V0IEh1bWlkaXR5XHJcbiAgICAgICAgY29uc3QgaHVtaWRpdHkgPSBkYXRhLmN1cnJlbnQuaHVtaWRpdHlcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtaWRpdHkgc3BhbicpLnRleHRDb250ZW50ID0gaHVtaWRpdHlcclxuICAgIH1cclxuICAgIGRpc3BsYXlQcmVjaXBpdGF0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgLy9TZXQgUHJlY2ljcGl0YXRpb25cclxuICAgICAgICBjb25zdCBwcmVjaXBpdGF0aW9uID0gZGF0YS5jdXJyZW50LnByZWNpcF9tbVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmVjaXBpdGF0aW9uIHNwYW4nKS50ZXh0Q29udGVudCA9IHByZWNpcGl0YXRpb25cclxuICAgIH1cclxuICAgIGRpc3BsYXlQcmVzc3VyZSAoZGF0YSkge1xyXG4gICAgICAgIC8vU2V0IHByZXNzdXJlXHJcbiAgICAgICAgY29uc3QgcHJlc3N1cmUgPSBkYXRhLmN1cnJlbnQucHJlc3N1cmVfbWJcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJlc3N1cmUgc3BhbicpLnRleHRDb250ZW50ID0gcHJlc3N1cmVcclxuICAgIH1cclxuICAgIGRpc3BsYXlUZW1wZXJhdHVyZSAoZGF0YSkge1xyXG4gICAgICAgIC8vU2V0IHRlbXBlcmF0dXJlIGluIGNlbGVjaXVzXHJcbiAgICAgICAgY29uc3QgdGVtcEMgPSBkYXRhLmN1cnJlbnQudGVtcF9jXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXAtYyBzcGFuJykudGV4dENvbnRlbnQgPSB0ZW1wQ1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vU2V0IGZhaHJlbmhlaXQgdGVtcGVyYXR1cmVcclxuICAgICAgICBjb25zdCB0ZW1wRiA9IGRhdGEuY3VycmVudC50ZW1wX2ZcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcC1mIHNwYW4nKS50ZXh0Q29udGVudCA9IHRlbXBGXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRpc3BsYXlXZWF0aGVySWNvbiAoZGF0YSkge1xyXG4gICAgICAgIC8vU2V0IENvbmRpdGlvbiBJY29uXHJcbiAgICAgICAgY29uc3QgaWNvblVybCA9IGRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWF0aGVyLWljb24nKS5zcmMgPSBpY29uVXJsXHJcbiAgICB9XHJcbiAgICBkaXNwbGF5V2luZERhdGEgKGRhdGEpIHtcclxuICAgICAgICAvL1NldCBXaW5kIGRpcmVjdGlvblxyXG4gICAgICAgIGNvbnN0IHdpbmREaXJlY3Rpb24gPSBkYXRhLmN1cnJlbnQud2luZF9kaXJcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luZC1kaXJlY3Rpb24gc3BhbicpLnRleHRDb250ZW50ID0gd2luZERpcmVjdGlvblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vU2V0IFdpbmQgc3BlZWRcclxuICAgICAgICBjb25zdCB3aW5kU3BlZWQgPSBkYXRhLmN1cnJlbnQud2luZF9rcGhcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luZC1zcGVlZCBzcGFuJykudGV4dENvbnRlbnQgPSB3aW5kU3BlZWRcclxuICAgIFxyXG4gICAgICAgIC8vU2V0IFdpbmQgZGVncmVlXHJcbiAgICAgICAgY29uc3Qgd2luZERlZ3JlZSA9IGRhdGEuY3VycmVudC53aW5kX2RlZ3JlZVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kLWRlZ3JlZSBzcGFuJykudGV4dENvbnRlbnQgPSB3aW5kRGVncmVlXHJcbiAgICB9XHJcbiAgICBkaXNwbGF5VVZSYWRpYXRpb24gKGRhdGEpIHtcclxuICAgICAgICAvL1NldCBVdlxyXG4gICAgICAgIGNvbnN0IHV2ID0gZGF0YS5jdXJyZW50LnV2XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3V2IHNwYW4nKS50ZXh0Q29udGVudCA9IHV2XHJcbiAgICB9XHJcbiAgICBcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==