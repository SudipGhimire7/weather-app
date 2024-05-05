
const locationInput = document.getElementById('locationInput')
const searchButton = document.getElementById('searchButton')

searchButton.addEventListener('click', () => {
    const location = locationInput.value 
    if(location){
        fetchWeather(location)
    }
})

locationInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const location = locationInput.value 
        if(location){
      fetchWeather(location)
    }
}
});

function fetchWeather(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=395c65dff7c0fa3d965301978a512260`

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        
        document.querySelector('h1.temp').innerHTML = `${Math.round(data.main.temp)}&deg;C`
        document.querySelector('h2.city').innerHTML = `${data.name}`
        document.querySelector('h4.description').innerHTML = `${(data.weather[0].description).toUpperCase()}`
        document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`
        document.querySelector('.wind').innerHTML = `${data.wind.speed}m/s`

        // document.querySelector('.sunrise').innerHTML = new Date(data.sys.sunrise * 1000).toLocaleTimeString().slice
        // document.querySelector('.sunset').innerHTML = new Date(data.sys.sunset * 1000).toLocaleTimeString()
let sunrise =data.sys.sunrise;//1714865755
let sunriseTime=new Date(sunrise*1000).toLocaleTimeString()
let sunriseHours=new Date(sunrise*1000).getHours();
let sunriseMinutes=new Date(sunrise*1000).getMinutes();
document.querySelector('.sunrise').innerHTML=`${sunriseHours}:${sunriseMinutes}AM`


let sunset =data.sys.sunset;//1714865755
let sunsetTime=new Date(sunrise*1000).toLocaleTimeString()
let sunsetHours=new Date(sunset*1000).getHours();
let sunsetMinutes=new Date(sunset*1000).getMinutes();
document.querySelector('.sunset').innerHTML=`${sunsetHours}:${sunsetMinutes}PM`
        const imageIcon = data.weather[0].icon
        const imageURL = `https://openweathermap.org/img/wn/${imageIcon}@4x.png`
        document.getElementById('weatherImage').src = imageURL
    
    
    }).catch(error => {
        console.log(error)
    })

}
