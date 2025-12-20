import { useState } from 'react';
import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import Button from '../../shared/ui/Button/Button';
import { Modal } from '../../shared/ui/Modal/Modal';
import { useTheme } from '../../shared/lib/theme/useTheme';

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { theme } = useTheme();

    return <div data-component='header' data-theme={theme}>
        <Button onClick={() => setIsModalOpen(true)}>О проекте</Button>
        <ThemeSwitcher />

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <Modal.Header>Информация о проекте</Modal.Header>
            <Modal.Body>
                <p>Этот проект демонстрирует возможности React и TypeScript</p>
            </Modal.Body>
            <Modal.Footer>
                <Modal.Actions>
                    <Modal.CloseButton />
                </Modal.Actions>
            </Modal.Footer>
        </Modal>
    </div>
}