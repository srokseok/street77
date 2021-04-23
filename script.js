// const product = {
//     mainMenuCard:{
//         name: 'С говядиной',
//         price: 14500,
//     },
//     mainMenuCard1:{
//         name: 'С говядиной',
//         price: 14500,
//     },
//     mainMenuCard2:{
//         name: 'С говядиной',
//         price: 14500,
//     },
//     mainMenuCard3:{
//         name: 'С говядиной',
//         price: 14500,
//     },
//     mainMenuCard4:{
//         name: 'С говядиной',
//         price: 14500,
//     },
//     mainMenuCard5:{
//         name: 'С говядиной',
//         price: 14500,
//     }
// }


const cards = document.querySelectorAll('.main-menu__content_add')
const prices = document.querySelectorAll('.main-menu__content_price')
const orderBtn = document.querySelector('.order__btn')
let totalPrice = document.querySelector('.total__price_span')
// let delPrice = 14500
let price = 0
for (let i = 0; i < cards.length; i++) {
    
    cards[i].addEventListener('click', (e) => {
        price += +prices[i].innerText
        totalPrice.innerHTML = price
    })
    
}

orderBtn.addEventListener('click', () => {
    if (totalPrice.innerHTML >= 0 ) {
        totalPrice.innerHTML -= 14500
    }
})


