var button = document.getElementById('.button');
var inputValue = document.querySelector('.inputValue');
var names = document.querySelector('.names');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
console.log(inputValue.value);
function reportFunction(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputValue.value +'&units=metric&appid=1222f7c432a5493a7a8d55cbd3841309')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
        names.innerHTML = "=> City Name   = " + nameValue;
        temp.innerHTML  = "=> Temperature = " + tempValue + "°C";
        desc.innerHTML  = "=> Weather     = " + descValue;
    })
    .catch(err => {
        names.innerHTML = "";
        temp.innerHTML = "Wrong City Name!";
        desc.innerHTML  = "";
    })
}