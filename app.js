const slides = document.querySelector(".slider").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

var index = 0;

//total slide image
const slidelength = slides.length;

//prev button click
prev.addEventListener('click', function () {
	prevslide();
});
//next button click
next.addEventListener('click', function () {
	nextslide();
});

//next slide
function nextslide() {
	if (index == slidelength - 1) {
		index = 0;
	} else {
		index++;
	}

	changeslide();
}

//prev slide
function prevslide() {
	if (index == 0) {
		index = slidelength - 1;
	} else {
		index--;
	}

	changeslide();
}

//change slide
function changeslide() {

	for (let i = 0; i < slidelength; i++) {
		slides[i].classList.remove('active');
	}

	slides[index].classList.add('active');

	setTimeout(changeslide, 2000);

}

//load slide
window.onload = changeslide;
