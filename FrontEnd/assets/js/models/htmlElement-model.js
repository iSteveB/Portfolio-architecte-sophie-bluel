export const createElement = (tag, className, textContent, innerHTML, attributes) => {
	const element = document.createElement(tag);
	if (className) element.className = className;
	if (textContent) element.textContent = textContent;
	if (innerHTML) element.innerHTML = innerHTML;
	if (attributes) {
			for (const key in attributes) {
					element.setAttribute(key, attributes[key]);
			}
	}
	return element;
}