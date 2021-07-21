
document.querySelector('.busca').addEventListener('submit', async event => {
    event.preventDefault()
    let inputValue = document.querySelector('#searchInput').value
    if (!inputValue) {
        clearInfo()
        return false
    }
    clearInfo()
    showWarning("Carregando...")
    let results = await fetch(getApiUrl(inputValue))
    let json = await results.json()
    if(json.cod === 200) {
        showInfo(json)
    } else {
        showWarning('Não Encontramos Esta localização.')
    }
})
const showWarning = msg => document.querySelector('.aviso').innerHTML = msg
const getApiUrl = (input) => {
    const dataUrl = { 
        apiKey :"f72a28ed203234b5d876a97896476276",
        url:'https://api.openweathermap.org/data/2.5/weather?q=',
        units:'units=metric',
        lang: 'lang=pt_br'
    }
    return `${dataUrl.url}${encodeURI(input)}&appid=${dataUrl.apiKey}&${dataUrl.units}&${dataUrl.lang}`
}
const clearInfo = () =>{    
    showWarning('')
    document.querySelector('.resultado').style.display = 'none'
}
const showInfo = (respJson) => {
    showWarning('')
    const data = {
        name: respJson.name,
        country: respJson.sys.country,
        temp: respJson.main.temp,
        tempIcon: respJson.weather[0].icon,
        windSpeed: respJson.wind.speed,
        windAngle: respJson.wind.deg
    }
    document.querySelector('.titulo').innerHTML = `${data.name}, ${data.country}`
    document.querySelector('.tempInfo').innerHTML = `${data.temp}<sup> ºC</sup>`
    document.querySelector('.ventoInfo').innerHTML = `${data.windSpeed} <span>km/h</span>`
    document.querySelector('.temp img').setAttribute('src',`http://openweathermap.org/img/wn/${data.tempIcon}@2x.png`)
    document.querySelector('.ventoPonto').style.transform = `rotate(${data.windAngle - 90}deg)`
    document.querySelector('.resultado').style.display = 'block'
}