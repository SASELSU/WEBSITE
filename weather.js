fetch('https://api.openweathermap.org/data/2.5/weather?q=Baton+Rouge&APPID=8c6a6fe0adb497d44d2e1be1c4249979&units=imperial')
.then(response => response.json())
.then(data => 
    document.getElementById('weather').appendChild(document.createTextNode("weather: " + data['weather'][0]['main'] + "\ntemp: " + data['main']['temp'] + "\nhumitiy: " + data['main']['humidity']))
    )

fetch('https://pro.openweathermap.org/data/2.5/forecast/climate?lat=30.4133&lon=91.1800&appid=8c6a6fe0adb497d44d2e1be1c4249979&units=imperial')
    .then(resp => resp.json)