import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalContext  } from './ModalContext';
import { ModalHeader as Header } from './ModalHeader';
import { ModalBody as Body } from './ModalBody';
import { ModalFooter as Footer } from './ModalFooter';
import { ModalActions as Actions } from './ModalActions';
import { ModalCloseButton as CloseButton } from './ModalCloseButton';
import { useTheme } from '../../lib/theme/useTheme';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

const ModalRoot = ({ isOpen, onClose, children }: ModalProps) => {

    const {theme} = useTheme();

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div data-component='modal-overlay' onClick={onClose}>
            <div data-component='modal-content' data-theme={theme} onClick={e => e.stopPropagation()}>
                <ModalContext.Provider value={{ onClose }}>
                    {children}
                </ModalContext.Provider>
            </div>
        </div>,
        document.getElementById('modal-root')!
    );
};

export const Modal = Object.assign(ModalRoot, {
    Header,
    Body,
    Footer,
    Actions,
    CloseButton,
});