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

export const createListItem = (item) => {
	const li = document.createElement('li');
	li.id = item.id;
	if (item.class) {
		li.classList.add(item.class);
	}
	li.textContent = item.name;
	return li;
};

export const createImg = (item) => {
  const img = document.createElement('img');
  img.src = item.imageUrl;
  img.alt = item.title;
  return img;
}