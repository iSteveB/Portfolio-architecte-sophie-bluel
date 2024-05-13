import { createElement } from '../models/htmlElement-model.js';
import { deleteWork } from '../services/work-service.js';
import { displayGallery } from './gallery-component.js';
import { checkUser } from '../utils/checkUser.js';
import { createFormModal } from './form-component.js';

export const displayImages = (galleryItems) => {
	const modalContent = document.querySelector('.modal-content');
	
	if (!modalContent) {
	    console.error('Aïe, une erreur est survenue');
	    return;
	}

	modalContent.innerHTML = '';

	galleryItems.forEach(({ imageUrl, title, id }) => {
		const imageContainer = createElement('div', 'image-container');
		const image = createElement('img', 'edit-image', null, null, { src: imageUrl, alt: title });
		const icon = createElement('i', 'delete-icon');
		const deleteIcon = createElement('img', 'delete-icon', null, null, { src: './assets/icons/trash-can-solid.svg', alt: 'delete', id: id });

		icon.appendChild(deleteIcon);
		imageContainer.appendChild(icon);
		imageContainer.appendChild(image);
		modalContent.appendChild(imageContainer);
	});
};

export const createModal = () => {
	const modalContainer = createElement('dialog', 'modal-container');
	const modal = createElement('div', 'modal');
	const h2 = createElement('h2', '', 'Galerie photo');
	const closeButton = createElement('span', 'close-modal', '', '&#215;');
	const modalContent = createElement('div', 'modal-content');
	const addButton = createElement('button', '', 'Ajouter une photo');

	modalContainer.appendChild(modal);
	modal.appendChild(h2);
	modal.appendChild(closeButton);
	modal.appendChild(modalContent);
	modal.appendChild(addButton);

	document.body.appendChild(modalContainer);
}

export const closeModal = (modalContainer) => {
	const modal = document.querySelector('.modal-container');
	const closeButton = document.querySelector('.close-modal');

	modalContainer.addEventListener('click', (event) => {
		if (event.target === modalContainer || event.target === closeButton) {
			modal.remove();
		}
	});
};

export const handleModal = (data) => {
	createModal();
	
	const token = checkUser();
	const modalContainer = document.querySelector('.modal-container');
	const modalContent = document.querySelector('.modal-content');
	
	modalContainer.style.display = 'flex';
	modalContent.innerHTML = '';

	displayImages(data);

	document.querySelectorAll('.delete-icon').forEach((deleteIcon) =>
		deleteIcon.addEventListener('click',(event) => handleDeleteIconClick(event, token))
	);

	document
		.querySelector('.modal button')
		.addEventListener('click', createFormModal);

	closeModal(modalContainer);
}

const handleDeleteIconClick = async (event, token) => {
	event.preventDefault();
	const workId = event.target.id;
	try {
		await deleteWork(workId, token);
		const newGalleryData = await getData();
		displayGallery(newGalleryData);
	} catch (error) {
		console.error(error);
	}
};