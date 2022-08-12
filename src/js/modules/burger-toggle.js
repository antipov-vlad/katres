const header = document.querySelector('.header');
const navigation = document.querySelector('.nav');
const navigationList = navigation.querySelector('.nav__list');
const buttonBurger = document.querySelector('.contacts__hamburger');
const containBurger = buttonBurger.querySelector(
	'.contacts__hamburger-contain'
);

// navigationList.classList.remove('visually-hidden')

const toggleBurger = () => {
	buttonBurger.onclick = () => {
		containBurger.classList.toggle('open');
		
		header.classList.toggle('header__wrapper--open-menu');

		if (containBurger.classList.contains('open')) {
			document.body.style.overflow = 'hidden';
            navigationList.style.visibility = 'visible';
            navigationList.classList.add('nav__list--visibility')
            
		} else {
			document.body.style.overflow = '';
            navigationList.style.visibility = 'hidden';
            navigationList.classList.remove('nav__list--visibility')
		}
	};
};

export default toggleBurger;
