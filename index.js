let boxes = document.querySelectorAll('td')
let affichage = () => boxes.forEach((boxe, i) => {
    boxe.innerHTML = localStorage.getItem(i) ? localStorage.getItem(i) : ''
})
affichage()
let player = true
let verification = () => {
    let box1 = localStorage.getItem('0') ? localStorage.getItem('0') : '0'
    let box2 = localStorage.getItem('1') ? localStorage.getItem('1') : '1'
    let box3 = localStorage.getItem('2') ? localStorage.getItem('2') : '2'
    let box4 = localStorage.getItem('3') ? localStorage.getItem('3') : '3'
    let box5 = localStorage.getItem('4') ? localStorage.getItem('4') : '4'
    let box6 = localStorage.getItem('5') ? localStorage.getItem('5') : '5'
    let box7 = localStorage.getItem('6') ? localStorage.getItem('6') : '6'
    let box8 = localStorage.getItem('7') ? localStorage.getItem('7') : '7'
    let box9 = localStorage.getItem('8') ? localStorage.getItem('8') : '8'
    console.log(box1 == box2 == box3)
}
let clickFunction = (e) => {
    if(e.target.innerHTML == ''){
        let value = player ? 'X' : 'O'
        e.target.innerHTML = value
        localStorage.setItem(e.target.id, value)
        player = !player
        verification()
    }
}
boxes.forEach(boxe => boxe.addEventListener('click', clickFunction))

// 1 2 3
// 4 5 6
// 7 8 9
// 1 4 7
// 2 5 8
// 3 6 9
// 1 5 9
// 3 5 7