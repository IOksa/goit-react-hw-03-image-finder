import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';


const ImageGallery=({gallery})=>(
    <ul className={css.ImageGallery}>
        {gallery.map(image => (
            <ImageGalleryItem key={image.id} image={image}/>
        ))}
    </ul>
);

export default ImageGallery;


