import { getCategories } from '../services/category-service.js';
import { displayGallery } from '../components/gallery-component.js';
import { createListItem } from '../models/listItem-model.js';

const filterContainer = document.querySelector('.filter');

export const createCategories = async () => {
  try {
    const categoryList = await getCategories();
    
    const allCategoriesElement = createListItem({ id: '0', name: 'Tous', class: 'active' });
    filterContainer.appendChild(allCategoriesElement);

    categoryList.forEach(({ id, name }) => {
      const categoryElement = createListItem({ id, name });
      filterContainer.appendChild(categoryElement);
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
