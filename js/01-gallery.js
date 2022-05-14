// 1. Создай галерею с возможностью клика по её элементам 
// и просмотра полноразмерного изображения в модальном окне. 

// 2. Создание и рендер разметки по массиву данных galleryItems 
// и предоставленному шаблону элемента галереи.

// 3. Реализация делегирования на div.gallery 
// и получение url большого изображения.

// 4. Подключение скрипта и стилей библиотеки модального окна basicLightbox.
// Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min) 
// файлы библиотеки.

// 5. Открытие модального окна по клику на элементе галереи.
// Для этого ознакомься с документацией и примерами.

// 6. Замена значения атрибута src элемента < img > в модальном окне перед открытием.
// Используй готовую разметку модального окна с изображением 
// из примеров библиотеки basicLightbox.


import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItems(galleryItems);
let originalImage;

function createGalleryItems(items) {
  return items.map(({ preview, original, description }) => {
    return `
  <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
  `;
  }).join('');
}

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);
galleryContainer.addEventListener('click', onGalleryItemsClick);

function onGalleryItemsClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const originalItem = evt.target.dataset.source;

  if (originalItem) {
    originalImage = basicLightbox.create(`<img src="${originalItem}">`, {
      onShow: () => window.addEventListener('keydown', onEscKeyPress),
      onClose: () => window.removeEventListener('keydown', onEscKeyPress),
    });
  originalImage.show()
}
}

function onEscKeyPress (evt) {
  if (evt.key === 'Escape') { 
  originalImage.close();
  }
  }