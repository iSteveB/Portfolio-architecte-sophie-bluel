import { getCategories } from '../services/category-service.js';
import { displayGallery } from '../components/gallery-component.js';
import { createElement } from '../models/htmlElement-model.js';

const filterContainer = document.querySelector('.filter');

export const createCategories = async () => {
  try {
    const categoryList = await getCategories();
    const allCategoriesElement = createElement('li', 'active', 'Tous', null, { id: '0' });
    
    filterContainer.appendChild(allCategoriesElement);

    categoryList.forEach(({ id, name }) => {
      const filterButton = createElement('li', null, name, null, { id });
      filterContainer.appendChild(filterButton);
    });
  } catch (error) {
    console.log(error)
  }
};

export const filterGalleryByCategory = (galleryData, buttonId) => {
  const filteredData = galleryData.filter(item => item.categoryId === buttonId);
  displayGallery(filteredData);
};

export const handleFilterClass = (event) => {
  const filterButtons = document.querySelectorAll('.filter li');

  filterButtons.forEach(button => button.classList.remove('active'));
  event.target.classList.add('active');
};

export const handleFilterClick = (event, data) => {
	const buttonId = event.target.id;
	if (buttonId === '0') {
		displayGallery(data);
		handleFilterClass(event);
	} else {
		filterGalleryByCategory(data, Number(buttonId));
		handleFilterClass(event);
	}
};
