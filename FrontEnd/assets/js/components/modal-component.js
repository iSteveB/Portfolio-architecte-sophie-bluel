
import { createImg } from '../models/gallery-model.js';

export const displayImages = (galleryItems) => {
	const modalContent = document.querySelector('.modal-content');
	
	if (!modalContent) {
	    console.error('Aïe, une erreur est survenue');
	    return;
	}

	modalContent.innerHTML = '';

  console.log(galleryItems);

	galleryItems.forEach(({ imageUrl, title, id }) => {
		const image = createImg({ imageUrl, title, id });
		modalContent.appendChild(image);
	});
};


export const createModal = () => {
	const modalContainer = document.createElement('aside');
	modalContainer.className = 'modal-container';

	const modal = document.createElement('div');
	modal.className = 'modal';
	modalContainer.appendChild(modal);

	const h2 = document.createElement('h2');
	h2.textContent = 'Galerie photo';
	modal.appendChild(h2);

	const closeModal = document.createElement('span');
	closeModal.className = 'close-modal';
	closeModal.innerHTML = '&#215;';
	modal.appendChild(closeModal);

	const modalContent = document.createElement('div');
	modalContent.className = 'modal-content';
	modal.appendChild(modalContent);

	const addButton = document.createElement('button');
	addButton.textContent = 'Ajouter une photo';
	modal.appendChild(addButton);

	document.body.appendChild(modalContainer);
}

