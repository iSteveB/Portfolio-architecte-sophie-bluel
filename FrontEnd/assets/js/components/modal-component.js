
import { createImg } from '../models/gallery-model.js';
import { createElement } from '../models/htmlElement-model.js';

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
	const modalContainer = createElement('dialog', 'modal-container');
	const modal = createElement('div', 'modal');
	const h2 = createElement('h2', '', 'Galerie photo');
	const closeModal = createElement('span', 'close-modal', '', '&#215;', );
	const modalContent = createElement('div', 'modal-content');
	const addButton = createElement('button', '', 'Ajouter une photo');

	modalContainer.appendChild(modal);
	modal.appendChild(h2);
	modal.appendChild(closeModal);
	modal.appendChild(modalContent);
	modal.appendChild(addButton);

	document.body.appendChild(modalContainer);
}

