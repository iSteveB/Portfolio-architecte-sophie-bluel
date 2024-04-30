import { getData } from './api.js';
import { createCategories, createGallery } from './components.js';


createCategories();

const data = await getData();

createGallery(data);

/******************************* FILTRES **************************/
const filterGallery = (data, buttonId) => {
	const filteredData = data.filter((item) => item.categoryId === buttonId);
	createGallery(filteredData);
};

const filterBtns = document.querySelectorAll('.filter li');

filterBtns.forEach((filterBtn) => {
	filterBtn.addEventListener('click', (event) => {
		const buttonId = event.target.id;
		if (buttonId === '0') {
			createGallery(data);
			handleFilterClass(event);
		} else {
			filterGallery(data, Number(buttonId));
			handleFilterClass(event);
		}
	});
});

const handleFilterClass = (event) => {
	console.log(event)
	filterBtns.forEach((filter) => {
		filter.classList.remove('active');
	});
	event.target.classList.add('active');
}
