




import { getImagesByQuery } from "./js/pixabay-api.js";
import { clearGallery } from "./js/render-functions.js";

const form = document.querySelector(".form");
const btn = document.querySelector("button");
btn.disabled = false;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearGallery();
    if (document.querySelector("input").value.trim() === "") {
        return;
    }
    const query = document.querySelector("input").value;
    getImagesByQuery(query)
})








