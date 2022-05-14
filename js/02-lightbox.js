import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItems(galleryItems);

function createGalleryItems(items) {
  return items.map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="" title ="${description}"/>
</a>
  `;
  }).join('');
}

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);

let gallery = new SimpleLightbox('.gallery a', { captionDelay: 250 });



