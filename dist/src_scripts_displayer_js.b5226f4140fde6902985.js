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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NjcmlwdHNfZGlzcGxheWVyX2pzLmI1MjI2ZjQxNDBmZGU2OTAyOTg1LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxTQUFTO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9zcmMvc2NyaXB0cy9kaXNwbGF5ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheWVyIHtcclxuICAgIGN1dG9taXplVGl0bGVzIChjaXR5TmFtZSkge1xyXG4gICAgICAgIC8vQ3VzdG9taXplIFBhZ2UgdGl0bGVcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RpdGxlJylcclxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRpdGxlLnRleHRDb250ZW50LmNvbmNhdChgaW4gJHtjaXR5TmFtZX1gKVxyXG4gICAgXHJcbiAgICAgICAgLy9DdXN0b21pemUgUGFnZSBoZWFkaW5nXHJcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5LW5hbWUnKVxyXG4gICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBjaXR5TmFtZVxyXG4gICAgfVxyXG4gICAgZGlzcGxheUNsb3VkQ292ZXIgKGRhdGEpIHtcclxuICAgICAgICAvL1NldCBjbG91ZFxyXG4gICAgICAgIGNvbnN0IGNsb3VkID0gZGF0YS5jdXJyZW50LmNsb3VkXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3VkIHNwYW4nKS50ZXh0Q29udGVudCA9IGNsb3VkXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBkaXNwbGF5R2VuZXJhbENvbmRpdGlvbihjb25kaXRpb24pIHtcclxuICAgICAgICAvL1NldCBnZW5lcmFsIGNvbmRpdGlvblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnZW5lcmFsLWNvbmRpdGlvbicpLnRleHRDb250ZW50ID0gY29uZGl0aW9uXHJcbiAgICB9XHJcbiAgICBkaXNwbGF5SHVtaWRpdHkgKGRhdGEpIHtcclxuICAgICAgICAvL1NldCBIdW1pZGl0eVxyXG4gICAgICAgIGNvbnN0IGh1bWlkaXR5ID0gZGF0YS5jdXJyZW50Lmh1bWlkaXR5XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h1bWlkaXR5IHNwYW4nKS50ZXh0Q29udGVudCA9IGh1bWlkaXR5XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5UHJlY2lwaXRhdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIC8vU2V0IFByZWNpY3BpdGF0aW9uXHJcbiAgICAgICAgY29uc3QgcHJlY2lwaXRhdGlvbiA9IGRhdGEuY3VycmVudC5wcmVjaXBfbW1cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJlY2lwaXRhdGlvbiBzcGFuJykudGV4dENvbnRlbnQgPSBwcmVjaXBpdGF0aW9uXHJcbiAgICB9XHJcbiAgICBkaXNwbGF5UHJlc3N1cmUgKGRhdGEpIHtcclxuICAgICAgICAvL1NldCBwcmVzc3VyZVxyXG4gICAgICAgIGNvbnN0IHByZXNzdXJlID0gZGF0YS5jdXJyZW50LnByZXNzdXJlX21iXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZXNzdXJlIHNwYW4nKS50ZXh0Q29udGVudCA9IHByZXNzdXJlXHJcbiAgICB9XHJcbiAgICBkaXNwbGF5VGVtcGVyYXR1cmUgKGRhdGEpIHtcclxuICAgICAgICAvL1NldCB0ZW1wZXJhdHVyZSBpbiBjZWxlY2l1c1xyXG4gICAgICAgIGNvbnN0IHRlbXBDID0gZGF0YS5jdXJyZW50LnRlbXBfY1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wLWMgc3BhbicpLnRleHRDb250ZW50ID0gdGVtcENcclxuICAgICAgICBcclxuICAgICAgICAvL1NldCBmYWhyZW5oZWl0IHRlbXBlcmF0dXJlXHJcbiAgICAgICAgY29uc3QgdGVtcEYgPSBkYXRhLmN1cnJlbnQudGVtcF9mXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXAtZiBzcGFuJykudGV4dENvbnRlbnQgPSB0ZW1wRlxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkaXNwbGF5V2VhdGhlckljb24gKGRhdGEpIHtcclxuICAgICAgICAvL1NldCBDb25kaXRpb24gSWNvblxyXG4gICAgICAgIGNvbnN0IGljb25VcmwgPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb25cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VhdGhlci1pY29uJykuc3JjID0gaWNvblVybFxyXG4gICAgfVxyXG4gICAgZGlzcGxheVdpbmREYXRhIChkYXRhKSB7XHJcbiAgICAgICAgLy9TZXQgV2luZCBkaXJlY3Rpb25cclxuICAgICAgICBjb25zdCB3aW5kRGlyZWN0aW9uID0gZGF0YS5jdXJyZW50LndpbmRfZGlyXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmQtZGlyZWN0aW9uIHNwYW4nKS50ZXh0Q29udGVudCA9IHdpbmREaXJlY3Rpb25cclxuICAgICAgICBcclxuICAgICAgICAvL1NldCBXaW5kIHNwZWVkXHJcbiAgICAgICAgY29uc3Qgd2luZFNwZWVkID0gZGF0YS5jdXJyZW50LndpbmRfa3BoXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmQtc3BlZWQgc3BhbicpLnRleHRDb250ZW50ID0gd2luZFNwZWVkXHJcbiAgICBcclxuICAgICAgICAvL1NldCBXaW5kIGRlZ3JlZVxyXG4gICAgICAgIGNvbnN0IHdpbmREZWdyZWUgPSBkYXRhLmN1cnJlbnQud2luZF9kZWdyZWVcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luZC1kZWdyZWUgc3BhbicpLnRleHRDb250ZW50ID0gd2luZERlZ3JlZVxyXG4gICAgfVxyXG4gICAgZGlzcGxheVVWUmFkaWF0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgLy9TZXQgVXZcclxuICAgICAgICBjb25zdCB1diA9IGRhdGEuY3VycmVudC51dlxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1diBzcGFuJykudGV4dENvbnRlbnQgPSB1dlxyXG4gICAgfVxyXG4gICAgXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=