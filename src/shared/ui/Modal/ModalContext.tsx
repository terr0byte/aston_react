import React from "react";

type ModalContextType = {
    onClose: () => void;
};

export const ModalContext = React.createContext<ModalContextType | null>(null);