export default {
	created(el, binding) {
		el.OnWheelEvent = (event) => {
			let side = null;
			event.deltaY < 0 ? (side = 'up') : (side = 'down');
			binding.value({ el: el, side: side });
		};
		el.addEventListener('wheel', el.OnWheelEvent);
	},
	destroyed(el) {
		el.removeEventListener('wheel', el.OnWheelEvent);
	},
};
