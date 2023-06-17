import css from './Modal.module.css';

const Modal=({gallery:{largeImageURL,tags}})=>(
<>
    <div className={css.Overlay}>
    <div className={css.Modal}>
        <img src={largeImageURL} alt={tags} />
    </div>
    </div>
</>
);

export default Modal;