import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({image:{id, webformatURL, tags}}) =>( 
    <img src={webformatURL} alt={tags} loading="lazy" className={css.ImageGalleryItemImage}/>

);

 
export default ImageGalleryItem;



