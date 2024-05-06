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

export const createImageGallery = ({ imageUrl }) => {
	const figure = document.createElement('figure');
	const img = document.createElement('img');

	img.src = imageUrl;
	figure.appendChild(img);
}

export const createImg = ({ imageUrl, title, id }) => {
	const imageContainer = document.createElement('div');

	imageContainer.className = 'image-container';
	const image = document.createElement('img');

	const icon = document.createElement('i');
	const img = document.createElement('img');
	img.src = './assets/icons/trash-can-solid.svg';
	img.alt = 'delete';
	icon.appendChild(img);
	imageContainer.appendChild(icon);

	image.src = imageUrl;
	image.alt = title;
	if (id) {
		image.id = id;
	}

	imageContainer.appendChild(image);

	return imageContainer;
};
