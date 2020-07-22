import Swiper from 'swiper'

const initSlider = (selector) => {
	const sliderContainers = document.querySelectorAll(selector)

	sliderContainers.forEach(container => {
		const slider = container.querySelector('.swiper-container')

		const swiper = new Swiper (slider, {
			loop: true,
			speed: 500,
			slidesPerView: 1,
			spaceBetween: 24
		})
	})
}

export default function slidersUI() {
	initSlider('.js-slider')
}
