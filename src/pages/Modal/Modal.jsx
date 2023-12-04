import './Modal.scss'
const Modal = () => {
    return (
        <div className='modal'>
            <div className='buttons__modal'>
                <button className='button__modal'>Удалить</button>
                <button className='button__modal button__modal_sec'>Сохранить</button>
            </div>
        </div>
    )
}

export default Modal;