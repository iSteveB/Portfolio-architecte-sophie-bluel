import { getData } from '../js/services/work-service.js';
import { displayGallery } from './components/gallery-component.js';
import { createCategories, filterGalleryByCategory, handleFilterClass } from './components/filter-component.js';


window.onload = async () => {
	const token = localStorage.getItem('token');
	const header = document.querySelector('header');
	const editDiv = document.querySelector('.editing');

	if (!token) {
		createCategories();
		header.classList.remove('logged');
		editDiv.style.display = 'none';
	} else {
		header.classList.add('logged');
		editDiv.style.display = 'flex';
	}
}




const data = await getData();
displayGallery(data);

const filterBtns = document.querySelectorAll('.filter li');

filterBtns.forEach((filterBtn) => {
	filterBtn.addEventListener('click', (event) => handleFilterClick(event));
});

export const handleFilterClick = async (event) => {
	const buttonId = event.target.id;
	if (buttonId === '0') {
		displayGallery(data);
		handleFilterClass(event);
	} else {
		filterGalleryByCategory(data, Number(buttonId));
		handleFilterClass(event);
	}
};