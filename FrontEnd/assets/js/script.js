import { fetchData } from './fetch.js';

const galleryDiv = document.querySelector('.gallery');

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
