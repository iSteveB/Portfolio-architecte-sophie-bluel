import { deleteWork, getData } from '../js/services/work-service.js';
import { displayGallery } from './components/gallery-component.js';
import { filterGalleryByCategory, handleFilterClass } from './components/filter-component.js';
import { createModal, closeModal, displayImages } from './components/modal-component.js';
import { createFormModal } from './components/form-component.js';
import { checkUser } from './utils/checkUser.js';
import { editContent } from './components/auth-component.js';

const token = checkUser();
editContent(token);

const data = await getData();
displayGallery(data);

const filterButtons = document.querySelectorAll('.filter li');

filterButtons.forEach((button) => {
	button.addEventListener('click', (event) => handleFilterClick(event));
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

export const handleModal = () => {
	createModal();
	
	const token = checkUser();
	const modalContainer = document.querySelector('.modal-container');
	const modalContent = document.querySelector('.modal-content');
	
	modalContainer.style.display = 'flex';
	modalContent.innerHTML = '';

	displayImages(data);

	document.querySelectorAll('.delete-icon').forEach((deleteIcon) =>
		deleteIcon.addEventListener('click', async (event) => {
			event.preventDefault();
			const workId = event.target.id;
			try {
				await deleteWork(workId, token);
				const newGalleryData = await getData();
				displayGallery(newGalleryData);
			} catch (error) {
				console.error(error);
			}
		})
	);

	document
		.querySelector('.modal button')
		.addEventListener('click', createFormModal);

	closeModal(modalContainer);
};

document.querySelector('.open-modal').addEventListener('click', handleModal);
