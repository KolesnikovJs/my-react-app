import './Button.scss';

const Button = ({ onClick }) => {
    return (
        <button onClick={onClick} className="button">
            Добавить акцию
        </button>
    );
};

export default Button;
