console.log("connected")

// let weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?q=skopje&units=metric&APPID=2095b65c75e8d13fe9e3b0e095b36936"

/**
 * CITY-NAME-HERE => Should be the input's value
 * API-KEY-HERE => Should be the api key we generate
 */

/**
 * 1. Create an HTML file;
 * 2. Create a JS file;
 * 3. Connect the JS file with the HTML file and test it =);
 * 4. Create simple input text and button in the HTML;
 * 5. Select those elements;
 * 6. Create a function that makes API request to the corresponding URL 
 * 7. Analyze the response, think about what you may use or what needs to be generated;
 * 8. Create a function that will get the necessary information (object properties) and display it in the HTML (for each info you need dot notation from the response)
 * -- NEEDED INFORMATION {
 * cityName:
 * currentTemp:
 * maxTemp:
 * avgTemp:
 * lowTemp:
 * maxHumidity:
 * avgHumidity:
 * lowHumidity:
 * 9. I will create smaller functions to display the maximum, average and minimum temperatures as well as their humidities
 * 
 * 
 * }
 * #.
 * FEEL FREE TO ADD MORE STEPS;
 * NOTE: Feel free to use BOOTSTRAP =)
*/

// `https://api.openweathermap.org/data/2.5/forecast?q=${userInput.value}&units=metric&APPID=ef8b0df6236719c430c3cda6e34ef111`


let userInput = document.getElementById("userInput");
let searchButton = document.getElementById("searchButton");
let cityName = document.getElementById("cityName");
let cityStatus = document.getElementById("cityStatus");
let clouds = document.getElementById("clouds");
let tempStatus = document.getElementById("tempStatus");
let timePeriod = document.getElementById("timePeriod");


function getWeatherInfo(city){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=ef8b0df6236719c430c3cda6e34ef111`)
      .then((response) => {
        console.log(response);
        return response.json()
      })
      .then((data) => {
        console.log(data)
        currentInfoCity(data);
      })
      .catch((err) => {
        console.log(err)
      })
}




searchButton.addEventListener("click", () => {

    getWeatherInfo(userInput.value)
})

getWeatherInfo("Skopje")

function currentInfoCity(info){
    cityName.innerHTML = `City Name: ${info.city.name}`;
    cityStatus.innerHTML = `Current temp: ${info.list[0].main.temp} Feels like: ${info.list[0].main.feels_like}`
    clouds.innerHTML = `${info.list[0].weather[0].description}: <img src="http://openweathermap.org/img/w/${info.list[0].weather[0].icon}.png"></img>`
    // tempStatus.innerHTML = maxTemp(info.list)
}


function maxTemp(arrayOfMaxTemps){

  let maxTemp = arrayOfMaxTemps.list[0];

  for(let i = 0; i < arrayOfMaxTemps.length; i++){
    if(arrayOfMaxTemps.list[i].main.temp_max > maxTemp){
      maxTemp = arrayOfMaxTemps.list[i].main.temp_max

    }
  }
  console.log(maxTemp)
  return maxTemp
}


function minTemp(arrayOfMinTemps){

  let minTemp = arrayOfMinTemps.list[0];

  for(let i = 0; i < arrayOfMinTemps.length; i++){
    if(arrayOfMinTemps.list[i].main.temp_min < minTemp){
      minTemp = arrayOfMinTemps.list[i].main.temp_min
    }
  }
  console.log(minTemp)
  return minTemp
}














// let max = -Infinity;
// let min = Infinity;



// function listOfTemps(ul, info){
//   minTemp(info.list)
//   console.log(min)
//   maxTemp(info)
//   let list = document.createElement("li");

  
// }

// function minTemp(Array) {
//   Array.forEach((e, i) => {
//       if (Array[i].main.temp_min < min) {
//           min = Number(Array[i].main.temp_min);
//       }
//   });

// }
// function maxTemp(Array) {
//   Array.forEach((element) => {
//     element = Array.temp_max
//       if (element > max) {
//           max = Number(element);
//       }
//   });
// }
