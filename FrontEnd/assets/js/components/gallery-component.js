import { createElement } from '../models/htmlElement-model.js'

const galleryContainer = document.querySelector('.gallery');

const createGalleryCard = ({ imageUrl, title }) => {
	const figure = createElement('figure');
	const image = createElement('img', null, null, null, { src: imageUrl, alt: title });
	const figCaption = createElement('figcaption', null, title);

	figure.appendChild(image);
	figure.appendChild(figCaption);
	galleryContainer.appendChild(figure);
};

export const displayGallery = (data) => {
  galleryContainer.innerHTML = '';
  data.forEach(createGalleryCard);
};

