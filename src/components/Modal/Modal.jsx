import ReactDOM from 'react-dom';
import css from './Modal.module.css';

const Modal=({largeImageURL,tags, onClose, onBackDropClick})=>{
    return ReactDOM.createPortal(
        <div className={css.Overlay} onClick={onBackDropClick}>
            <div className={css.Modal}>
                <img src={largeImageURL} alt={tags} onClick={onClose} width="800" />
            </div>
        </div>,
        document.querySelector("#popup-root")
    );
};




export default Modal;



