export const getScrolledFromTop = () => {
	return window.pageYOffset !== undefined
		? window.pageYOffset
		: (document.documentElement || document.body.parentNode || document.body)
				.scrollTop;
};
