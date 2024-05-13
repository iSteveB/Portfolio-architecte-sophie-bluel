
const galleryContainer = document.querySelector('.gallery');

export const createGalleryCard = ({ imageUrl, title }) => {
	const figure = document.createElement('figure');
	const image = document.createElement('img');
	const figCaption = document.createElement('figcaption');

	image.src = imageUrl;
	image.alt = title;
	figCaption.textContent = title;

	figure.appendChild(image);
	figure.appendChild(figCaption);
	galleryContainer.appendChild(figure);
};