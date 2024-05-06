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
};

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

// Modal
import { createModal, displayImages } from './components/modal-component.js';


const openModal = () => {
	createModal();

	const modalContainer = document.querySelector('.modal-container');
	const modalContent = document.querySelector('.modal-content');

	modalContainer.style.display = 'flex';
	modalContent.innerHTML = '';

	displayImages(data);

	document.querySelector('.close-modal').addEventListener('click', () => {
		closeModal();
	});
};

document.querySelector('.open-modal').addEventListener('click', () => {
	openModal();
});

const closeModal = () => {
	const modal = document.querySelector('.modal-container');
	modal.style.display = 'none';
};





