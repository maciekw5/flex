const burgerBtn = document.querySelector('.burger-btn');
const nav = document.querySelector('.nav');
const allNavItems = document.querySelectorAll('.nav__item');
const navBtnBars = document.querySelector('.burger-btn__bars');
const allSections = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
	nav.classList.toggle('nav-active');

    navBtnBars.classList.remove('black-bars-color')

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav-active');
		});
		item.classList.toggle('nav-animation');
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};


const handleObserver = () => {
    const currentSection = window.scrollY;

    allSections.forEach(section => {

        if(section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {

            navBtnBars.classList.add('black-bars-color')

        } else if(!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {

            navBtnBars.classList.remove('black-bars-color')

        }

    })
}



handleCurrentYear();
burgerBtn.addEventListener('click', handleNav);
window.addEventListener('scroll', handleObserver)
