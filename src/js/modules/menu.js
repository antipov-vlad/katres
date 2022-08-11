const navigation = document.querySelector('.nav');
const buttonHamburger = navigation.querySelector('.nav__hamburger');
const navigationList = navigation.querySelector('.nav__list')

navigationList.classList.remove('visually-hidden') //Убрать

const openingNavigation = () => {
  navigation.addEventListener('click', (evt) => {
    if (buttonHamburger.classList.contains('open')) {
      navigationList.classList.remove('visually-hidden')
    } else {
 navigationList.classList.add('visually-hidden')
    }
  })
}
export default openingNavigation
