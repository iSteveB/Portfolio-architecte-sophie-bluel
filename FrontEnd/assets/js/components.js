import { getCategories } from './api.js';

const galleryContainer = document.querySelector('.gallery');
const filterContainer = document.querySelector('.filter');

export const createGalleryCard = (item) => {
	const figure = document.createElement('figure');
	const img = document.createElement('img');
	const figcaption = document.createElement('figcaption');
	img.src = item.imageUrl;
	img.alt = item.title;
	figcaption.textContent = item.title;
	figure.appendChild(img);
	figure.appendChild(figcaption);
	galleryContainer.appendChild(figure);
};

export const createCategories = async () => {
	try {
		const categories = await getCategories();
		const removeFilter = document.createElement('li');
		removeFilter.id = '0';
		removeFilter.classList.add('active');
		removeFilter.textContent = 'Tous';
		filterContainer.appendChild(removeFilter);

		categories.forEach((item) => {
			const li = `<li id="${item.id}">${item.name}</li>`;
			filterContainer.innerHTML += li;
		});
	} catch (error) {
		console.log(error);
	}
};

export const createGallery = (items) => {
	galleryContainer.innerHTML = '';
	items.forEach((item) => {
		createGalleryCard(item);
	});
};