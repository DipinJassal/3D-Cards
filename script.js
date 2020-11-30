// Movement animation

const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase');
const info = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

// Moving animation event

container.addEventListener('mousemove', (e) => {
	let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
	let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
	card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener('mouseenter', (e) => {
	card.style.transition = 'none';
    //Popout
	 sneaker.style.transform = ' rotateZ(-45deg)';
	 
});

//Animate Out
container.addEventListener('mouseleave', () => {
	card.style.transition = 'all 0.5s ease';
	card.style.transform = `rotateY(0deg) rotateX(0deg)`;
	//Popback

	 sneaker.style.transform = 'rotateZ(0deg)';
});
