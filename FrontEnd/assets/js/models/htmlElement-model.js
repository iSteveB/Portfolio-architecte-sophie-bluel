export const createElement = (tag, className, textContent) => {
	const el = document.createElement(tag);
	if (className) el.className = className;
	if (textContent) el.textContent = textContent;
	return el;
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