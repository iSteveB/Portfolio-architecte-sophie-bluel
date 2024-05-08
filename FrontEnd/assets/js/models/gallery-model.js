
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

export const createImageGallery = ({ imageUrl, title }) => {
	const figure = document.createElement('figure');
	const img = document.createElement('img');

	img.src = imageUrl;
	img.alt = title;
	figure.appendChild(img);
}

export const createImg = ({ imageUrl, title, id }) => {
	const imageContainer = document.createElement('div');

	imageContainer.className = 'image-container';
	const image = document.createElement('img');

	const icon = document.createElement('i');
	const deleteIcon = document.createElement('img');
	deleteIcon.src = './assets/icons/trash-can-solid.svg';
	deleteIcon.alt = 'delete';
	deleteIcon.id = id;
	icon.className = 'delete-icon';
	icon.appendChild(deleteIcon);
	imageContainer.appendChild(icon);

	image.src = imageUrl;
	image.alt = title;
	image.classList.add('edit-image');

	imageContainer.appendChild(image);

	return imageContainer;
};

