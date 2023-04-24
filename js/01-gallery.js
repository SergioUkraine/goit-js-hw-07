import { galleryItems } from './gallery-items.js';
// Change code below this line

const galeryContainer = document.querySelector('.gallery');
const galleryCards = createGalleryMarkup(galleryItems);
galeryContainer.insertAdjacentHTML('beforeend', galleryCards);

galeryContainer.addEventListener('click', handleClickElementGallety);



function handleClickElementGallety(event) {
    if (event.target.tagName !== 'IMG') {
        return;
    }
    galeryContainer.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape') {
            return;
        }
        instance.close();
    })

    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`);
    instance.show();
}

function createGalleryMarkup(pictures) {
    return pictures
        .map(({ preview, original, description }) => {
            return `
            <li class="gallery__item">
                <a class="gallery__link" href="#">
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