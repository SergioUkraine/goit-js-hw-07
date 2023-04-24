import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryCards = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryCards);

galleryContainer.addEventListener('click', handleClickElementGallery);



function handleClickElementGallery(e) {

    e.preventDefault();

    if (e.target.tagName !== 'IMG') {
        return;
    }

    galleryContainer.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') {
            return;
        }
        galleryWindow.close();
    })

    const galleryWindow = basicLightbox.create(`<img src="${e.target.dataset.source}" width="800" height="600">`);
    galleryWindow.show();
}

function createGalleryMarkup(pictures) {
    return pictures
        .map(({ preview, original, description }) => {
            return `
            <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                  <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                  />
              </a>
            </li>
            `;
        })
        .join(" ");
}