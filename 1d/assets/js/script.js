document.body.addEventListener('keyup', event => {
    let input = document.querySelector('#input')
    if (input.value === '') playSound(event.code.toLowerCase())
})
document.querySelector('.composer button').addEventListener('click', ()=>{
    let song = document.querySelector('#input').value
    if (song !== '') playComposition(song.split(''))
})
document.querySelector('div').addEventListener('click', event =>{
    playSound(event.target.getAttribute('data-key'))
})