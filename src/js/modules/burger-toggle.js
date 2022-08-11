const navigation = document.querySelector('.nav');
export const buttonBurger = document.querySelector('.nav__hamburger');

const toggleBurger = () => {
    navigation.addEventListener('click', () =>{
        buttonBurger.classList.toggle('open')
    })
}

export default toggleBurger
