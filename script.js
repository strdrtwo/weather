// const wrapper = document.querySelector(".main");
const inputPart = document.querySelector(".input-part");
const inputField = inputPart.querySelector("input");
const weatherPart = document.querySelector(".weather-part");

const week = {
    1:'Monday',
    2:'Tuesday',
    3:'Wednesday',
    4:'Thursday',
    5:'Friday',
    6:'Saturday',
    0:'Sunday',
}

inputField.addEventListener("keyup", e =>{
    if(e.key == "Enter" && inputField.value != ""){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputField.value}&units=metric&appid=25a4797589841ee9f9416e33d4f1a244&lang=ru`)
        .then(res => res.json())
        .then(result => weatherDetails(result))

    }
});


function weatherDetails(info){
    console.log('done')
    weatherPart.querySelector(".weather .humidity .value").innerText = info.main.humidity + ' %';
    weatherPart.querySelector(".weather .feels .value").innerText = info.main.feels_like + ' °C';
    weatherPart.querySelector('.today .deeptemp .sun').innerText = info.weather[0].description;
    weatherPart.querySelector(".today .deeptemp .temp").innerText = info.main.temp + ' °C';
    weatherPart.querySelector(".today .description .location").innerText = info.name + ', ' + info.sys.country;

    
    let day =  new Date(info.dt * 1000).getDay();
    console.log(new Date(info.dt * 1000))
    weatherPart.querySelector(".today .description .date").innerHTML = new Date(info.dt * 1000)
    weatherPart.querySelector('.today .description h1').innerText = week[day];


    inputField.value = "";
};

 


// Апи на 9 дней
// let i = 0
// if ( i < 1){ 
//     let res = fetch('https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&units=metric&exclude=hourly,minutely&appid=25a4797589841ee9f9416e33d4f1a244&lang=ru')
//     .then(res => res.json())
//     .then(result => console.log(new Date(result.daily[0].dt * 1000).getDay()))
    
//     i+1
// }