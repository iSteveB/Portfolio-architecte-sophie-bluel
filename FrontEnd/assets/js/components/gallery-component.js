import { createGalleryCard } from "../models/gallery-model.js";

const galleryContainer = document.querySelector('.gallery');

export const displayGallery = (galleryItems) => {
  galleryContainer.innerHTML = '';
  galleryItems.forEach(createGalleryCard);
};

