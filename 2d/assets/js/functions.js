
const updateClock = () =>{
    let now = new Date()
    let hour = formatTime(now.getHours())
    let minute = formatTime(now.getMinutes())
    let second = formatTime(now.getSeconds())
    digitalElement.innerHTML = `${hour}:${minute}:${second}`;
    let sDeg = movePoint(second)
    let mDeg = movePoint(minute)
    let hDeg = movePoint(hour, 12)
    secElement.style.transform = `rotate(${sDeg}deg)`
    minElement.style.transform = `rotate(${mDeg}deg)`
    horElement.style.transform = `rotate(${hDeg}deg)`
}
const movePoint = (field, max = 60) => ((360 / max ) * field) - 90
const formatTime = time => time < 10 ? `0${time}`: time;