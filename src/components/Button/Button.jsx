import css from './Button.module.css';

const Button = ({onClick})=>(
    <div className={css.ButtonThumb}>
        <button hidden type="button" className={css.Button} onClick={onClick}>Load more</button>
    </div>
    
    
);



export default Button;