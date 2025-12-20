import React from 'react';

export const ModalHeader = ({ children }: { children: React.ReactNode }) => (
    <header data-component='modal-header'>
        <h2>{children}</h2>
    </header>
);