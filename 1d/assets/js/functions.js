const playSound = sound => {
    let audioElement = document.querySelector(`#s_${sound}`)
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)
    if (keyElement) activeButton(keyElement)
    if (audioElement) playAudio(audioElement)
}
const activeButton = (keyElement) => {
    keyElement.classList.add('active')
    setTimeout(()=>{
        keyElement.classList.remove('active')
    }, 300)
}
const playAudio = audioElement => {
    audioElement.currentTime = 0
    audioElement.play()
}
const playComposition = songArray => {
    let wait = 0
    for(let songItem of songArray) {
        setTimeout(()=>{
            playSound(`key${songItem}`)
        }, wait)
        wait += 250
    }
}