import { fetchData } from './fetch.js';
import { fetchCategories } from './fetch.js';

const galleryDiv = document.querySelector('.gallery');
const filterList = document.querySelector('.filter');

try {
	const data = await fetchData();

	data.forEach((item) => {
		const figure = document.createElement('figure');
		const img = document.createElement('img');
		const figcaption = document.createElement('figcaption');
		img.src = item.imageUrl;
		img.alt = item.title;
		figcaption.textContent = item.title;
		figure.appendChild(img);
		figure.appendChild(figcaption);
		galleryDiv.appendChild(figure);
	});
} catch (error) {
	console.error(error);
}

try {
	const categories = await fetchCategories();
	const removeFilter = document.createElement('li');
	removeFilter.classList.add('filter-0');
	removeFilter.classList.add('active');
	removeFilter.textContent = 'Tous';
	filterList.appendChild(removeFilter);

	categories.forEach((item, id) => {
		const li = `<li class="filter-${id + 1}">${item.name}</li>`;
		filterList.innerHTML += li;
	});
  
} catch (error) {
	console.log(error);
}
