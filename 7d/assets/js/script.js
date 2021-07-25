let areaController = {
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
    f: null
}
let neutralArea = document.querySelector('.neutralArea')
let items = document.querySelectorAll('.item')
let areas = document.querySelectorAll('.area')

neutralArea.addEventListener('mousedown', startEvent)
neutralArea.addEventListener('dragover', dragOverNeutal)
neutralArea.addEventListener('dragleave', dragLeave)
neutralArea.addEventListener('drop', drop)

items.forEach( item => {
    item.addEventListener('dragstart', dragStart)
    item.addEventListener('dragend', dragEnd)
})
areas.forEach( area => {
    area.addEventListener('dragover', dragOver)
    area.addEventListener('dragleave', dragLeave)
    area.addEventListener('drop', drop)
})
