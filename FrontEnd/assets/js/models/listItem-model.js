export const createListItem = (item) => {
	const li = document.createElement('li');
	li.id = item.id;
	if (item.class) {
		li.classList.add(item.class);
	}
	li.textContent = item.name;
	return li;
};
