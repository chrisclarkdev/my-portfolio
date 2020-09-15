const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', ()=> {
    menu.classList.contains('hidden') ? menu.classList.remove('hidden') : menu.classList.add('hidden')
})

// const cards = document.querySelectorAll('.card');
// console.log(cards)
// const hide = document.querySelector('#hide');

 
//     document.addEventListener('click', (card)=> {
//         hide.classList.contains('hidden') ? hide.classList.remove('hidden') : hide.classList.add('hidden')
//         console.log(card.target);
//     })

