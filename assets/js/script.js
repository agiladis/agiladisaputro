const addResponsive = () => {
	let x = document.querySelector('#navResponsive');
	//console.log(x)
	if (x.className === 'navbar') {
		x.className += ' responsive';
	} else { 
		x.className = 'navbar';
	}
}

window.addEventListener('scroll', () => {
	const scrolled = window.scrollY //mengetahui brp pixel yang ke scroll
	console.log(scrolled)
	const navRespon = document.querySelector('#navRespon')
	if (scrolled >= 204) {
		navRespon.classList.add('nav-smoke')
		navRespon.style.top = '0'
	}else {
		navRespon.classList.remove('nav-smoke')
		navRespon.style.top = "-74px"
	}
	// console.log(scrolled)
})