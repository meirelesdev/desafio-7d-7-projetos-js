const resetBoard = () => {
    warning = ''
    let random = Math.floor(Math.random() * 2)
    turn = (random === 0 ) ? 'X' : 'O';
    for(let pos in board){
        board[pos] = '';
    }
    playing = true;
    renderBoard()
    renderInfo()
}
const renderBoard = () =>{
    for ( let pos in board ) {
        let item = document.querySelector(`div[data-item=${pos}]`)
        item.innerHTML = board[pos]
    }
    checkGame()
}

const renderInfo = () => {
    document.querySelector('.vez').innerHTML = turn
    document.querySelector('.resultado').innerHTML = warning
}
const itemClick = event => {
    let item = event.target.getAttribute('data-item')
    if (board[item] !== '' || !playing) return false    
    board[item] = turn
    renderBoard()
    toggleTurn()
}
const toggleTurn = () => {
    turn = (turn === 'X') ? 'O' : 'X'
    renderInfo()
}
const checkGame = () => {
    if(checkWinnerFor('X')) {
        warning = 'O "X" Venceu.'
        playing = false;
    } else if(checkWinnerFor('O')){
        warning = 'O "O" Venceu.'
        playing = false;
    } else if( isFull()){
        warning = 'Deu empate.'
        playing = false;
    }
}
const isFull = () => {
    for (let i in board) {
        if (board[i] === '') {
            return false
        }
    }
    return true
}
const checkWinnerFor = turn => {
    for (let victory in typesOfVictory) {
        let pArr = typesOfVictory[victory].split(',')
        let hasWon = pArr.every(option => board[option] == turn)
        if(hasWon) return true
    }
}