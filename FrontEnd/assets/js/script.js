import { deleteWork, getData } from '../js/services/work-service.js';
import { displayGallery } from './components/gallery-component.js';
import { filterGalleryByCategory, handleFilterClass } from './components/filter-component.js';
import { createModal, displayImages } from './components/modal-component.js';
import { createFormModal } from './components/form-component.js';
import { checkUser } from './utils/checkUser.js';
import { editContent } from './components/auth-component.js';

const token = checkUser();
editContent(token);

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

export const handleModal = () => {
	const token = checkUser();
	createModal();

	const modalContainer = document.querySelector('.modal-container');
	const modalContent = document.querySelector('.modal-content');

	modalContainer.style.display = 'flex';
	modalContent.innerHTML = '';

	displayImages(data);

	document.querySelectorAll('.delete-icon').forEach((icon) =>
		icon.addEventListener('click', async (event) => {
			event.preventDefault();
			const workId = event.target.id;
			await deleteWork(workId, token);
			const newGalleryData = await getData();
			displayGallery(newGalleryData);
		})
	);

	document
		.querySelector('.modal button')
		.addEventListener('click', createFormModal);

	closeModal(modalContainer)
		
};

document.querySelector('.open-modal').addEventListener('click', handleModal);

export const closeModal = (modalContainer) => {
	const modal = document.querySelector('.modal-container');
	const closeBtn = document.querySelector('.close-modal');

	modalContainer.addEventListener('click', (event) => {
		if (event.target === modalContainer || event.target === closeBtn) {
			modal.remove();
		}
	});
};
