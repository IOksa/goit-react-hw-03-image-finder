import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery=({gallery})=>{
    // console.log("ImageGallery=", gallery);
    // console.log("ImageGallery gallery[0]=", gallery[0]);
    // gallery.map((image)=>
    // console.log("image=", image,"image.webformatURL=", image.webformatURL, "image.tags=", image.tags, "image.id=", image.id));
            
    return (
    <ul className={css.ImageGallery}>
        {gallery.map(image => (
            <li key={image.id} className={css.ImageGalleryItem} >
            <ImageGalleryItem image={image}/>
            </li>
 
        ))}
    </ul>
    );
};

export default ImageGallery;


