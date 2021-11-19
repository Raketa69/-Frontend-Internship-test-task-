let SearchButton = document.getElementById('SearchButton')
let inputValue = document.getElementById('InputText')
let questionButton1 = document.getElementById ('question1_button');
let WeatherDetailsImage = document.getElementById ('WeatherDetailsImage');

let CityCard1Button = document.getElementById ('CityCard1Button');
let CityCard2Button = document.getElementById ('CityCard2Button');
let CityCard3Button = document.getElementById ('CityCard3Button');
let CityCard4Button = document.getElementById ('CityCard4Button');

let searchList = document.getElementById ('searchList');
let searchList1 = document.getElementById ('searchList1');
let searchList2 = document.getElementById ('searchList2');
let searchList3 = document.getElementById ('searchList3');
let searchList4 = document.getElementById ('searchList4');

let errorDiv = document.getElementById ('errorDiv');
let cityName1;
let cityName2;
let cityName3;
let cityName4;

let today = new Date()
let currentTime = new Date()
let year = currentTime.getFullYear()
document.getElementById("footerText").innerText += "Vladyslav Rokytenko - " + year
let key = "64eb7f71512192e5ac6303e3c2537ecf"

fetch('http://localhost:3000/all')
    .then((response) => {
        return response.json();
    })
    .then((data) => {

        document.getElementById('InputText').addEventListener('input', function () {

                let search =  document.getElementById('InputText').value;
                console.log(search)
                let regExp = new RegExp(search, 'g');
                searchList.style.display = "block"
                if(search !== '') {
                    //data.forEach(function () {
                    let index
                        for (let i = 0; i <data.length; i++) {
                            if(data[i].name.search(regExp) === -1) {
                            }
                            else
                            {
                                console.log(data[i].name)
                                document.getElementById('searchList1').innerText = data[i].name
                                cityName1 = data[i].name;
                                index = i
                                break;
                            }
                        }
                        for (let j = index+1; j < data.length; j++)
                        {
                            if(data[j].name.search(regExp) === -1) {
                            }
                            else
                            {
                                console.log(data[j].name)
                                document.getElementById('searchList2').innerText = data[j].name
                                cityName2 = data[j].name
                                index = j
                                break;
                            }
                        }

                        for (let k = index+1; k < data.length; k++)
                        {
                            if(data[k].name.search(regExp) === -1) {
                            }
                            else
                            {
                                console.log(data[k].name)
                                document.getElementById('searchList3').innerText = data[k].name
                                cityName3 = data[k].name
                                index = k
                                break;
                            }
                        }
                    for (let l = index+1; l < data.length; l++)
                    {
                        if(data[l].name.search(regExp) === -1) {
                        }
                        else
                        {
                            console.log(data[l].name)
                            document.getElementById('searchList4').innerText = data[l].name
                            cityName4 = data[l].name
                            break;
                        }
                    }
                }
            }
        )
    });

document.addEventListener('click', function(e) {
    let id = "searchList"
    if (e.target.id !== 'block') {
        searchList.style.display = 'none';
    }
});

document.addEventListener('click', function(e) {
    let id = "errorDiv"
    if (e.target.id !== 'block') {
        errorDiv.style.display = 'none';
    }
});


document.addEventListener('keydown', event => {

    if (event.keyCode === 13)
    {
        document.getElementById("SearchButton").click()
    }

});
function searchListEvent()
{
    if (searchList.style.display !== 'none')
    {
        searchList.style.display= "none";
    }
    else
    {
        searchList.style.display="block";
    }
}

function buttonSearchEvent() {
    SearchButton.addEventListener('click', () =>
    {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${key}`)
            .then(function (resp) { return resp.json() })
            .then(function (data) {
                errorDiv.style.display = "none"
                document.getElementById('CityName').textContent = data.name;
                document.getElementById('temp').innerHTML = Math.round(data.main.temp - 273) + '&deg' + "C";
                document.getElementById('weatherNameMain').textContent = data.weather[0]['main'];
                document.getElementById('weatherNameDescription').textContent = data.weather[0]['description'];
                document.getElementById('Date').textContent = today.toLocaleDateString()
                WeatherDetailsImage.style.backgroundImage= 'url("https://openweathermap.org/img/wn/'+data.weather[0]['icon']+'@2x.png")'
                document.getElementById('TempMinValue').innerHTML = Math.round(data.main.temp_min - 273) + '&deg' + "C";
                document.getElementById('TempMaxValue').innerHTML = Math.round(data.main.temp_max - 273) + '&deg' + "C";
                searchList.style.display = "none";
                console.log(data)
            })
            .catch(function () {
                errorDiv.style.display = "block"
                searchList.style.display = "none"
            });

    });
}

function buttonWeatherNY() {
    let cityName = "New York"
    CityCard1Button.addEventListener('click', () =>
    {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`)
            .then(function (resp) { return resp.json() })
            .then(function (data) {
                errorDiv.style.display = "none"
                document.getElementById('CityName').textContent = data.name;
                document.getElementById('temp').innerHTML = Math.round(data.main.temp - 273) + '&deg' + "C";
                document.getElementById('weatherNameMain').textContent = data.weather[0]['main'];
                document.getElementById('weatherNameDescription').textContent = data.weather[0]['description'];
                document.getElementById('Date').textContent = today.toLocaleDateString()
                WeatherDetailsImage.style.backgroundImage= 'url("https://openweathermap.org/img/wn/'+data.weather[0]['icon']+'@2x.png")'
                document.getElementById('TempMinValue').innerHTML = Math.round(data.main.temp_min - 273) + '&deg' + "C";
                document.getElementById('TempMaxValue').innerHTML = Math.round(data.main.temp_max - 273) + '&deg' + "C";
                searchList.style.display = "none";
                window.scrollTo(0, 0);
            })
            .catch(function () {
            });
    });
}

function buttonWeatherLondon() {
    let cityName = "London"
    CityCard2Button.addEventListener('click', () =>
    {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`)
            .then(function (resp) { return resp.json() })
            .then(function (data) {
                errorDiv.style.display = "none"
                document.getElementById('CityName').textContent = data.name;
                document.getElementById('temp').innerHTML = Math.round(data.main.temp - 273) + '&deg' + "C";
                document.getElementById('weatherNameMain').textContent = data.weather[0]['main'];
                document.getElementById('weatherNameDescription').textContent = data.weather[0]['description'];
                document.getElementById('Date').textContent = today.toLocaleDateString()
                WeatherDetailsImage.style.backgroundImage= 'url("https://openweathermap.org/img/wn/'+data.weather[0]['icon']+'@2x.png")'
                document.getElementById('TempMinValue').innerHTML = Math.round(data.main.temp_min - 273) + '&deg' + "C";
                document.getElementById('TempMaxValue').innerHTML = Math.round(data.main.temp_max - 273) + '&deg' + "C";
                searchList.style.display = "none";
                window.scrollTo(0, 0);
            })
            .catch(function () {
            });
    });
}

function buttonWeatherDubai() {
    let cityName = "Dubai"
    CityCard3Button.addEventListener('click', () =>
    {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`)
            .then(function (resp) { return resp.json() })
            .then(function (data) {
                errorDiv.style.display = "none"
                document.getElementById('CityName').textContent = data.name;
                document.getElementById('temp').innerHTML = Math.round(data.main.temp - 273) + '&deg' + "C";
                document.getElementById('weatherNameMain').textContent = data.weather[0]['main'];
                document.getElementById('weatherNameDescription').textContent = data.weather[0]['description'];
                document.getElementById('Date').textContent = today.toLocaleDateString()
                WeatherDetailsImage.style.backgroundImage= 'url("https://openweathermap.org/img/wn/'+data.weather[0]['icon']+'@2x.png")'
                document.getElementById('TempMinValue').innerHTML = Math.round(data.main.temp_min - 273) + '&deg' + "C";
                document.getElementById('TempMaxValue').innerHTML = Math.round(data.main.temp_max - 273) + '&deg' + "C";
                searchList.style.display = "none";
                window.scrollTo(0, 0);
            })
            .catch(function () {
            });
    });
}

function buttonWeatherParis() {
    let cityName = "Paris"
    CityCard4Button.addEventListener('click', () =>
    {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`)
            .then(function (resp) { return resp.json() })
            .then(function (data) {
                errorDiv.style.display = "none"
                document.getElementById('CityName').textContent = data.name;
                document.getElementById('temp').innerHTML = Math.round(data.main.temp - 273) + '&deg' + "C";
                document.getElementById('weatherNameMain').textContent = data.weather[0]['main'];
                document.getElementById('weatherNameDescription').textContent = data.weather[0]['description'];
                document.getElementById('Date').textContent = today.toLocaleDateString()
                WeatherDetailsImage.style.backgroundImage= 'url("https://openweathermap.org/img/wn/'+data.weather[0]['icon']+'@2x.png")'
                document.getElementById('TempMinValue').innerHTML = Math.round(data.main.temp_min - 273) + '&deg' + "C";
                document.getElementById('TempMaxValue').innerHTML = Math.round(data.main.temp_max - 273) + '&deg' + "C";
                searchList.style.display = "none";
                window.scrollTo(0, 0);
            })
            .catch(function () {
            });
    });
}

function buttonWeatherSearch() {
    cityName1 = searchList1.innerText
        searchList1.addEventListener('click', () =>
    {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName1}&appid=${key}`)
            .then(function (resp) { return resp.json() })
            .then(function (data) {
                errorDiv.style.display = "none"
                document.getElementById('InputText').textContent = cityName1
                document.getElementById('CityName').textContent = data.name;
                document.getElementById('temp').innerHTML = Math.round(data.main.temp - 273) + '&deg' + "C";
                document.getElementById('weatherNameMain').textContent = data.weather[0]['main'];
                document.getElementById('weatherNameDescription').textContent = data.weather[0]['description'];
                document.getElementById('Date').textContent = today.toLocaleDateString()
                WeatherDetailsImage.style.backgroundImage= 'url("https://openweathermap.org/img/wn/'+data.weather[0]['icon']+'@2x.png")'
                document.getElementById('TempMinValue').innerHTML = Math.round(data.main.temp_min - 273) + '&deg' + "C";
                document.getElementById('TempMaxValue').innerHTML = Math.round(data.main.temp_max - 273) + '&deg' + "C";
                searchList.style.display = "none";
            })
            .catch(function () {
            });
    });
}

function buttonWeatherSearch2() {
    cityName2 = searchList2.innerText
    searchList2.addEventListener('click', () =>
    {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName2}&appid=${key}`)
            .then(function (resp) { return resp.json() })
            .then(function (data) {
                errorDiv.style.display = "none"
                document.getElementById('InputText').textContent = cityName2
                document.getElementById('CityName').textContent = data.name;
                document.getElementById('temp').innerHTML = Math.round(data.main.temp - 273) + '&deg' + "C";
                document.getElementById('weatherNameMain').textContent = data.weather[0]['main'];
                document.getElementById('weatherNameDescription').textContent = data.weather[0]['description'];
                document.getElementById('Date').textContent = today.toLocaleDateString()
                WeatherDetailsImage.style.backgroundImage= 'url("https://openweathermap.org/img/wn/'+data.weather[0]['icon']+'@2x.png")'
                document.getElementById('TempMinValue').innerHTML = Math.round(data.main.temp_min - 273) + '&deg' + "C";
                document.getElementById('TempMaxValue').innerHTML = Math.round(data.main.temp_max - 273) + '&deg' + "C";
                searchList.style.display = "none";
            })
            .catch(function () {
            });
    });
}

function buttonWeatherSearch3() {
    cityName3 = searchList3.innerText
    searchList3.addEventListener('click', () =>
    {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName3}&appid=${key}`)
            .then(function (resp) { return resp.json() })
            .then(function (data) {
                errorDiv.style.display = "none"
                document.getElementById('InputText').textContent = cityName3
                document.getElementById('CityName').textContent = data.name;
                document.getElementById('temp').innerHTML = Math.round(data.main.temp - 273) + '&deg' + "C";
                document.getElementById('weatherNameMain').textContent = data.weather[0]['main'];
                document.getElementById('weatherNameDescription').textContent = data.weather[0]['description'];
                document.getElementById('Date').textContent = today.toLocaleDateString()
                WeatherDetailsImage.style.backgroundImage= 'url("https://openweathermap.org/img/wn/'+data.weather[0]['icon']+'@2x.png")'
                document.getElementById('TempMinValue').innerHTML = Math.round(data.main.temp_min - 273) + '&deg' + "C";
                document.getElementById('TempMaxValue').innerHTML = Math.round(data.main.temp_max - 273) + '&deg' + "C";
                searchList.style.display = "none";
            })
            .catch(function () {
            });
    });
}

function buttonWeatherSearch4() {
    cityName4 = searchList4.innerText
    searchList4.addEventListener('click', () =>
    {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName4}&appid=${key}`)
            .then(function (resp) { return resp.json() })
            .then(function (data) {
                errorDiv.style.display = "none"
                document.getElementById('InputText').textContent = cityName4
                document.getElementById('CityName').textContent = data.name;
                document.getElementById('temp').innerHTML = Math.round(data.main.temp - 273) + '&deg' + "C";
                document.getElementById('weatherNameMain').textContent = data.weather[0]['main'];
                document.getElementById('weatherNameDescription').textContent = data.weather[0]['description'];
                document.getElementById('Date').textContent = today.toLocaleDateString()
                WeatherDetailsImage.style.backgroundImage= 'url("https://openweathermap.org/img/wn/'+data.weather[0]['icon']+'@2x.png")'
                document.getElementById('TempMinValue').innerHTML = Math.round(data.main.temp_min - 273) + '&deg' + "C";
                document.getElementById('TempMaxValue').innerHTML = Math.round(data.main.temp_max - 273) + '&deg' + "C";
                searchList.style.display = "none";
            })
            .catch(function () {
            });
    });
}

function buttonShow() {
    questionButton1.addEventListener('click',show);
}

function show() {
    let question1_text = document.getElementById ('question1_text');
    let questionButton2 = document.getElementById ('question2_button');
    let questionButton3 = document.getElementById ('question3_button');
    let questionButton4 = document.getElementById ('question4_button');

    if (question1_text.style.display !== 'none')
    {
        question1_text.style.display= "none";
        if (screen.width > 500)
        {
            questionButton2.style.marginTop = "70px";
            questionButton3.style.marginTop = "140px";
            questionButton4.style.marginTop = "210px";
        }
        else
        {
            questionButton2.style.top = "85%";
            questionButton3.style.top = "125%";
            questionButton4.style.top = "165%";
        }



    }
    else
        {
            question1_text.style.display = "block";
            if (screen.width > 500) {

                questionButton2.style.marginTop = "200px";
                questionButton3.style.marginTop = "270px";
                questionButton4.style.marginTop = "340px";
            }
            else
            {
                questionButton2.style.top = "240%";
                questionButton3.style.top = "280%";
                questionButton4.style.top = "320%";
            }

         }
}
