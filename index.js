let boxes = document.querySelectorAll('td')
let reset = document.querySelector('div')
let winner = document.getElementById('winner')
let result = localStorage.getItem('result') ? JSON.parse(localStorage.getItem('result')) : ['', '', '', '', '', '', '', '', '']
let affichage = () => boxes.forEach((boxe, i) => {
    boxe.innerHTML = result[i]
})
affichage()
let player = true
let verification = () => {
    let possibilite = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
    possibilite.forEach(p => {
        if(result[p[0]] != "" && result[p[0]] == result[p[1]] && result[p[0]] == result[p[2]]){
            boxes.forEach(boxe => boxe.removeEventListener('click', clickFunction))
            let box1 = document.getElementById(p[0])
            let box2 = document.getElementById(p[1])
            let box3 = document.getElementById(p[2])
            box1.style.color = "red"
            box2.style.color = "red"
            box3.style.color = "red"
            winner.innerHTML = player ? 'Player O won' : 'Player X won'
        }
    })
}
verification()
let clickFunction = (e) => {
    if(e.target.innerHTML == ''){
        let value = player ? 'X' : 'O'
        e.target.innerHTML = value
        result[e.target.id] = value
        localStorage.setItem('result', JSON.stringify(result))
        player = !player
        verification()
    }
}
boxes.forEach(boxe => boxe.addEventListener('click', clickFunction))
reset.addEventListener('click', () => {
    winner.innerHTML = ''
    result = ['', '', '', '', '', '', '', '', '']
    localStorage.setItem('result', JSON.stringify(result))
    affichage()
    boxes.forEach(boxe => {
        boxe.addEventListener('click', clickFunction)
        boxe.style.color = 'black'
        player = true
    })
})