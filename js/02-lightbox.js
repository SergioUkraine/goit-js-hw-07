import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryCards = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryCards);

function createGalleryMarkup(pictures) {
    return pictures
        .map(({ preview, original, description }) => {
            return `
            <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img 
                        class="gallery__image" 
                        src="${preview}" 
                        alt="${description}" 
                    />
                </a>
            </li>
            `; 
        })
        .join("");
}

const lightboxGallary = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom",
});