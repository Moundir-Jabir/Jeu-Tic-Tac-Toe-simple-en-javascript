let boxes = document.querySelectorAll('td')
let replay = document.querySelector('#replay')
let reset = document.querySelector('#reset')
let spanX = document.querySelector('#playerX')
let spanO = document.querySelector('#playerO')
let player = true
let result = localStorage.getItem('result') ? JSON.parse(localStorage.getItem('result')) : ['', '', '', '', '', '', '', '', '']
let playerX = localStorage.getItem('playerX') ? localStorage.getItem('playerX') : 0
let playerO = localStorage.getItem('playerO') ? localStorage.getItem('playerO') : 0
let affichage = () => {
    boxes.forEach((boxe, i) => {
        boxe.innerHTML = result[i]
    })
    spanX.innerHTML = playerX
    spanO.innerHTML = playerO
}
affichage()
let verification = () => {
    let possibilite = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    possibilite.forEach(p => {
        if (result[p[0]] != "" && result[p[0]] == result[p[1]] && result[p[0]] == result[p[2]]) {
            boxes.forEach(boxe => boxe.removeEventListener('click', clickFunction))
            let box1 = document.getElementById(p[0])
            let box2 = document.getElementById(p[1])
            let box3 = document.getElementById(p[2])
            box1.style.color = "red"
            box2.style.color = "red"
            box3.style.color = "red"
            if (player) {
                playerO++
                localStorage.setItem('playerO', playerO)
            } else {
                playerX++
                localStorage.setItem('playerX', playerX)
            }
            affichage()
        }
    })
}
verification()
let clickFunction = (e) => {
    if (e.target.innerHTML == '') {
        let value = player ? 'X' : 'O'
        e.target.innerHTML = value
        result[e.target.id] = value
        localStorage.setItem('result', JSON.stringify(result))
        player = !player
        verification()
    }
}
boxes.forEach(boxe => boxe.addEventListener('click', clickFunction))
let replayFunction = () => {
    result = ['', '', '', '', '', '', '', '', '']
    localStorage.setItem('result', JSON.stringify(result))
    affichage()
    player = true
    boxes.forEach(boxe => {
        boxe.addEventListener('click', clickFunction)
        boxe.style.color = 'black'
    })
}
replay.addEventListener('click', replayFunction)
reset.addEventListener('click', () => {
    playerX = 0
    playerO = 0
    localStorage.setItem('playerO', playerO)
    localStorage.setItem('playerX', playerX)
    replayFunction()
})