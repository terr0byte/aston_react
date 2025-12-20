import {useContext} from "react";
import { ModalContext } from "./ModalContext";

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('Modal compound components must be rendered within Modal');
    }
    return context;
};