// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const imageCardsMarkup = createImageCards(galleryItems);
const imageCardContainer = document.querySelector('.gallery');
insertMarkup(imageCardsMarkup, imageCardContainer);

imageCardContainer.addEventListener('click', onImageClick);

const lightbox = new SimpleLightbox('.gallery__link', {
    captionsData: `alt`,
    captionDelay: 250,
  });


function createImageCards(images) {

    return images.map(({ preview, original, description }) => 
        
      `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`

    ).join('\n\n');
  
};

function insertMarkup(markup, location) {

  location.insertAdjacentHTML('beforeend', markup)
  
}

function onImageClick(event) {

  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
    };
}
