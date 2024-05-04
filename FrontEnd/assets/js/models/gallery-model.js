const galleryContainer = document.querySelector('.gallery');

export const createGalleryCard = ({ imageUrl, title }) => {
	const figure = document.createElement('figure');
	const img = document.createElement('img');
	const figCaption = document.createElement('figcaption');

	img.src = imageUrl;
	img.alt = title;
	figCaption.textContent = title;

	figure.appendChild(img);
	figure.appendChild(figCaption);
	galleryContainer.appendChild(figure);
};