// INITIALIZE STATEMENT
let board = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: '',
}
let typesOfVictory = [
    'a1,a2,a3',
    'b1,b2,b3',
    'c1,c2,c3',

    'a1,b1,c1',
    'a2,b2,c2',
    'a3,b3,c3',

    'a1,b2,c3',
    'a3,b2,c1',
]
let turn = ''
let warning = ''
let playing = false;
// EXECUTIONS
resetBoard()
document.querySelector('.reset').addEventListener('click', resetBoard)
document.querySelectorAll('.item').forEach(item => item.addEventListener('click', itemClick))
