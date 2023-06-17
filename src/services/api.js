import axios from 'axios';

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "35857316-b0404474f9c8f0cfe824c51d8";
let countPage=1;
// let searchQuery="";
let queryLimit=12;

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

    const response = await axios.get(`${BASE_URL}?${params}`);

    console.log('searchQuery=', searchQuery);
    console.log('query=', `${BASE_URL}?${params}`);
    console.log('params=', params);
    // const markup=response.data.hits.map((image)=>
    //     `<img class="photo-card__image" src="${image.webformatURL}" alt="${image.tags}" loading="lazy" id=${image.id}/>`).join('');

    //     console.log('markup=', markup);
    
    return response.data.hits;
    
    // return await axios.get(`${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`);
   // https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

}