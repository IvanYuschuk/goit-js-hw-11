import { createGallery, showLoader, hideLoader } from "./render-functions";

import axios from 'axios';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



export function getImagesByQuery(query) {
    const baseURL = "https://pixabay.com/api/";
    
    showLoader(); 

    return axios.get(baseURL, {
        params: {
            key: "53364117-23ce706026567dc1d7b8b2eb2",
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
        },
        timeout: 3000,
    })
    .then(response => {
        if (response.data.hits.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            });
            return; 
        }

        createGallery(response.data.hits);
    })
    .catch((error) => { 
        console.error(error);
    })
    .finally(() => {
        hideLoader();
    });
}



