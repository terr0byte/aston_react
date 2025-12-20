import Button from '../Button/Button'
import { useModal } from './useModal';

export const ModalCloseButton = () => {
    const { onClose } = useModal();
    return (
        <Button
            data-component='modal-closeButton'
            onClick={onClose}
            aria-label="Закрыть"
        >
            &times;
        </Button>
    );
};