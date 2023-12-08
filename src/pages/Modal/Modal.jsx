import './Modal.scss';
const Modal = ({ closeModal, setProducts, productState }) => {
    const addCashback = (event) => {
        setProducts((prev) => ({
            ...prev,
            cashback: event.target.value,
        }));
    };
    const addCategories = (event) => {
        setProducts((prev) => ({
            ...prev,
            categories: event.target.value,
        }));
    };
    const addSubcategories = (event) => {
        setProducts((prev) => ({
            ...prev,
            subcategories: event.target.value,
        }));
    };
    const addBrand = (event) => {
        setProducts((prev) => ({
            ...prev,
            brand: event.target.value,
        }));
    };

    console.log(productState);

    return (
        <div className="modal">
            <div className="buttons__modal">
                <button onClick={closeModal} className="button__modal">
                    Удалить
                </button>
                <button
                    onClick={closeModal}
                    className="button__modal button__modal_sec"
                >
                    Сохранить
                </button>
            </div>
            <p>Начисление кешбека с покупки</p>
            <input
                onChange={addCashback}
                className="input__modal"
                placeholder="20%"
            ></input>
            <p>Категория</p>
            <div className="select__modal">
                <select onChange={addCategories}>
                    <option value="Название категории">
                        Название категории
                    </option>
                    <option value="Эстетический уход">Эстетический уход</option>
                    <option value="Пилинги">Пилинги</option>
                    <option value="Средства для коррекции фигуры и массажа">
                        Средства для коррекции фигуры и массажа{' '}
                    </option>
                </select>
            </div>
            <p>Подкатегория</p>
            <div className="select__modal">
                <select onChange={addSubcategories}>
                    <option value="Название подкатегории">
                        Название подкатегории
                    </option>
                    <option value="Очищение">Очищение</option>
                    <option value="Скрабы">Скрабы</option>
                    <option value="Тонизация">Тонизация</option>
                    <option value="Кремы и гели">Кремы и гели</option>
                    <option value="Кислотные пилинги">Кислотные пилинги</option>
                </select>
            </div>
            <p>Бренд</p>
            <div className="select__modal">
                <select onChange={addBrand}>
                    <option value="1">Имя бренда</option>
                    <option value="2">Academie</option>
                    <option value="3">Frolyis Pro</option>
                    <option value="4">Kosmoteros Personnel Paris</option>
                </select>
            </div>
        </div>
    );
};

export default Modal;
