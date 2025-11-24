import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let galleryLightbox;

export function createGallery(images) {
    const ulElem = document.querySelector("ul.gallery");
    const markup = images.map((image) => `
        <li class="gallery-item">
            <a class="gallery-link" href="${image.largeImageURL}">
                <img
                    class="gallery-image"
                    src="${image.webformatURL}"
                    data-source="${image.largeImageURL}"
                    alt="${image.tags}"
                />
            </a>
            <ul class="image-info">
                <li class="image-info-item">
                    <p class="info-p">Likes</p>
                    <span class="info-span">${image.likes}</span>
                </li>
                <li class="image-info-item">
                    <p class="info-p">Views</p>
                    <span class="info-span">${image.views}</span>
                </li>
                <li class="image-info-item">
                    <p class="info-p">Comments</p>
                    <span class="info-span">${image.comments}</span>
                </li>
                <li class="image-info-item">
                    <p class="info-p">Downloads</p>
                    <span class="info-span">${image.downloads}</span>
                </li>
            </ul>
        </li>`
    ).join(''); 
    ulElem.insertAdjacentHTML('beforeend', markup);

    if (!galleryLightbox) {
        // Якщо галерея ще не створена — ініціалізуємо її
        galleryLightbox = new SimpleLightbox('.gallery a', {
            captionsData: 'alt', // брати опис з атрибута alt
            captionDelay: 250,   // затримка появи підпису
        });
    } else {
        // Якщо галерея вже існує — просто оновлюємо її (щоб вона "побачила" нові картинки)
        galleryLightbox.refresh();
    }
}

export function clearGallery() {
    const ulElem = document.querySelector(".gallery");
    if (ulElem) {
        ulElem.innerHTML = "";
    }
}

// Приклад реалізації (додайте це в свій файл, якщо немає)
export function showLoader() {
    const loader = document.querySelector('.loader');
    if(loader) loader.style.display = 'block'; // або loader.classList.remove('is-hidden')
}

export function hideLoader() {
    const loader = document.querySelector('.loader');
    if(loader) loader.style.display = 'none'; // або loader.classList.add('is-hidden')
}