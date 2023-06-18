import axios from 'axios';

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "35857316-b0404474f9c8f0cfe824c51d8";
let countPage=1;
// let searchQuery="";
let queryLimit=12;


const errorAPIMessages = {
	404: 'Sorry, there are no images matching your search query. Please try again.',
	common: 'Something went wrong... Try again later.',
};

export const getFetchQueryImageGallery = async (searchQuery)=>{
    const params = new URLSearchParams({
        key: API_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: queryLimit,
        page: countPage,

    });

        return await axios.get(`${BASE_URL}?${params}`, {
            transformResponse: [
                (data) => {
                    const items = JSON.parse(data);
                    console.log("axios=", items);
                    return items.hits;
                },
            ],
        })
        .then((response) => response.data)
        .catch ((err)=>{
            throw Error(errorAPIMessages[err.response?.status || 'common']);
        });

       
}

