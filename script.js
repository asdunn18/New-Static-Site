const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))



var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 2000,
	speedAsDuration: true
});