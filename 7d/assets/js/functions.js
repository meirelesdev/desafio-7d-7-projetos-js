const startEvent = event => {
    if(event.currentTarget ===  event.target)  return false
    event.target.setAttribute('draggable', true)
}
const dragStart = event => {
    let item = event.currentTarget
    item.classList.add('dragging')
}
const dragEnd = event => {
    let item = event.currentTarget
    item.classList.remove('dragging')
}
// QUANDO PASSA POR CIMA
const dragOver = event => {
    if(event.currentTarget.querySelector('.item') !== null) return false 
    event.preventDefault()
    event.currentTarget.classList.add('hover')
    updateAreas()
}
const dragOverNeutal = event => {
    event.preventDefault()
    event.currentTarget.classList.add('hover')
}
// QUANDO SAI DE CIMA
const dragLeave = event => {
    event.currentTarget.classList.remove('hover')
}
// QUANDO SOLTA O ITEM DENTRO
const drop = event => {
    let currentArea = event.currentTarget
    let dragItem = document.querySelector('.item.dragging')
    currentArea.classList.remove('hover')
    currentArea.appendChild(dragItem)
    updateAreas()
}
const updateAreas = () => {
    areas.forEach(area => {
        let name = area.getAttribute('data-name')
        if(area.querySelector('.item') !== null) {
            areaController[name] = area.querySelector('.item').innerHTML
        } else {
            areaController[name] = null
        }
    })
    
    // if (areaController.a === '1' && areaController.b === '2' && areaController.c === '3') {
    //     document.querySelector('.areas').classList.add('correct')
    // } else {
    //     document.querySelector('.areas').classList.remove('correct')
    // }
}