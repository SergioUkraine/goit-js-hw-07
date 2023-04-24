import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryCards = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryCards);

galleryContainer.addEventListener('click', handleGalleryClick);

function createGalleryMarkup(pictures) {
    return pictures
        .map(({ preview, original, description }) => {
            return `
            <li class="gallery__item">
               <a class="gallery__link" href="${original}">
                  <img class="gallery__image" src="${preview}" alt="${description}" />
               </a>
            </li>`; 
        })
        .join(" ");
}

function handleGalleryClick(e) {
    e.preventDefault();
    if (e.target.tagName !== 'IMG') return;
    lightbox = new SimpleLightbox('.gallery a', { /* options */ });
}
