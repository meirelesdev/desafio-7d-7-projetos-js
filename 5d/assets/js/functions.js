const colorClickEvent = event => {
    let color = event.target.getAttribute('data-color')
    currentColor = color
    document.querySelector(`.color.active`).classList.remove('active')
    event.target.classList.add('active')
}
const mouseDownEvent = event => {
    canDraw = true
    mouseX = event.pageX - screen.offsetLeft
    mouseY = event.pageY - screen.offsetTop
}
const mouseMoveEvent = event => {
    if(!canDraw) return false
    draw(( event.pageX - screen.offsetLeft), (event.pageY - screen.offsetTop))
}
const mouseUpEvent = () => {
    canDraw = false
}
const draw = (horizonal, vertical) => {
    ctx.beginPath()
    // largura da linha
    ctx.lineWidth = 5;
    // Formato da linha
    ctx.lineJoin = "round" // todas as opcoes de tipos de linhas "bevel" || "round" || "miter";
    ctx.moveTo(mouseX, mouseY)
    ctx.lineTo(horizonal, vertical)
    ctx.closePath()
    // seta a cor
    ctx.strokeStyle = currentColor
    ctx.stroke()
    mouseX = horizonal
    mouseY = vertical
}
const clearScreen = () => {
    ctx.setTransform(1,0,0,1,0,0)
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}
const saveImage = () => {
    window.location.href= screen.toDataURL("image/png").replace("image/png", "image/octet-stream")
}