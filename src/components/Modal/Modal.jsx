// Modal.js
import React from 'react';
import styles from './Modal.module.css';

function Modal({ onClose, children="Contenu vide" }) {

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
}

export default Modal;
