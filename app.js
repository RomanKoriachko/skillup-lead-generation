AOS.init();

// Navigation

let mainButtons = document.querySelectorAll('.main-btn');
let formSection = document.querySelector('.form-section');

if (window.screen.height > 1100) {
	for (let i = 0; i < mainButtons.length; i++) {
		mainButtons[i].addEventListener('click', function () {
			window.scrollTo({
				top: formSection.getBoundingClientRect().top + window.scrollY - 100,
				behavior: 'smooth',
			});
		});
	}
} else {
	for (let i = 0; i < mainButtons.length; i++) {
		mainButtons[i].addEventListener('click', function () {
			window.scrollTo({
				top: formSection.getBoundingClientRect().top + window.scrollY - 62,
				behavior: 'smooth',
			});
		});
	}
}

let aboutRecruterBtn = document.querySelectorAll('.header-menu-item-1');
let programBtn = document.querySelectorAll('.header-menu-item-2');
let coachBtn = document.querySelectorAll('.header-menu-item-3');

let aboutRecruterSection = document.querySelector('.who-is-section');
let programSection = document.querySelector('.program-section');
let coachSection = document.querySelector('.coach-section');

for (let i = 0; i < aboutRecruterBtn.length; i++) {
	aboutRecruterBtn[i].addEventListener('click', () => {
		window.scrollTo({
			top:
				aboutRecruterSection.getBoundingClientRect().top + window.scrollY - 100,
			behavior: 'smooth',
		});
	});
}

for (let i = 0; i < programBtn.length; i++) {
	programBtn[i].addEventListener('click', () => {
		window.scrollTo({
			top: programSection.getBoundingClientRect().top + window.scrollY - 100,
			behavior: 'smooth',
		});
	});
}

for (let i = 0; i < coachBtn.length; i++) {
	coachBtn[i].addEventListener('click', () => {
		window.scrollTo({
			top: coachSection.getBoundingClientRect().top + window.scrollY - 100,
			behavior: 'smooth',
		});
	});
}

// Burger menu

const burgerMenuBtn = document.querySelector('.burger-menu-btn');
const burgerMenu = document.querySelector('.burger-menu-content');
const burgerMenuItems = document.querySelectorAll('.burger-menu-item');

burgerMenuBtn.addEventListener('click', () => {
	burgerMenu.classList.toggle('open');
	burgerMenuBtn.classList.toggle('open');
});

for (let i = 0; i < burgerMenuItems.length; i++) {
	burgerMenuItems[i].addEventListener('click', () => {
		burgerMenu.classList.remove('open');
		burgerMenuBtn.classList.remove('open');
	});
}

// Sliders

$(document).ready(function () {
	$('.slider-text').slick({
		arrows: false,
		infinite: true,
		dots: true,
		variableWidth: true,
		slidesToShow: 3,
		centerMode: true,
		centerPadding: '60px',
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					centerMode: false,
				},
			},
		],
	});
});
$(document).ready(function () {
	$('.companies-slider').slick({
		arrows: false,
		infinite: true,
		centerMode: false,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 1000,
	});
});
$(document).ready(function () {
	$('.companies-tablet-slider').slick({
		arrows: false,
		infinite: true,
		centerMode: true,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 1000,
	});
});

// Mobile button

const mobileBtn = document.querySelector('.mobile-registration-btn-wrapper');

window.addEventListener('scroll', () => {
	if (
		window.scrollY > window.innerHeight &&
		window.scrollY <=
			formSection.getBoundingClientRect().top +
				window.scrollY -
				window.innerHeight
	) {
		mobileBtn.classList.add('show');
		mobileBtn.classList.remove('hide');
	} else {
		mobileBtn.classList.add('hide');
		mobileBtn.classList.remove('show');
	}
});

// phone input

function validatePhone(id, formSelector) {
	const input = document.querySelector(id);
	const output = input.nextElementSibling;
	const inputWrapper = input.parentElement;
	const form = document.querySelector(formSelector);
	const errorMap = [
		'Некоректний номер',
		'Некоректний код країни',
		'Мало символів',
		'Занадто багато символів',
		'Некоректний номер',
	];

	const iti = window.intlTelInput(input, {
		utilsScript:
			'https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js',
		hiddenInput: 'phone',
		preferredCountries: ['ua'],
	});

	const preventDefault = function (e) {
		e.preventDefault();
	};

	const reset = function () {
		inputWrapper.classList.remove('false-number');
		output.innerHTML = '';
		form.removeEventListener('submit', preventDefault);
	};

	input.addEventListener('blur', function () {
		reset();
		if (input.value.trim()) {
			if (iti.isValidNumber()) {
				output.innerHTML =
					'Номер коректний, повний міжнародний формат: ' + iti.getNumber();
				output.classList.add('correct');
			} else {
				form.addEventListener('submit', preventDefault);
				inputWrapper.classList.add('false-number');
				const errorCode = iti.getValidationError();
				output.innerHTML = errorMap[errorCode];
				output.classList.remove('correct');
			}
		}
	});

	input.addEventListener('change', reset);
	input.addEventListener('keyup', reset);
}

validatePhone('#phone1', '#form');
