const profile = document.querySelector('.profile');
const menu =document.querySelector('.menu')

function menuShow(){
	menu.classList.toggle('active');
}

profile.addEventListener('click', function () {
	menuShow();
});
