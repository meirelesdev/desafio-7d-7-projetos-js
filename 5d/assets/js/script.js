
let currentColor = "black"
let canDraw = false
let mouseX = 0
let mouseY = 0
let screen = document.querySelector('#tela')
let ctx = screen.getContext('2d')
let colors = document.querySelectorAll(".colorArea .color")
let btnClear = document.querySelector('.clear')
let btnSave = document.querySelector('.saveImage')

colors.forEach(item => item.addEventListener('click', colorClickEvent))

screen.addEventListener('mousedown', mouseDownEvent)
screen.addEventListener('mousemove', mouseMoveEvent)
screen.addEventListener('mouseup', mouseUpEvent)
btnClear.addEventListener('click', clearScreen)
btnSave.addEventListener('click', saveImage)
