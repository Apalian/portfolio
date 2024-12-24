// src/components/Modal/ModalContext.js
import React, { createContext, useState } from 'react';
import Modal from 'react-modal';
import styles from './Modal.module.css'; // Importer le module CSS

// Créer le contexte
export const ModalContext = createContext();

// Créer le fournisseur de contexte
export const ModalProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    // Fonction pour ouvrir la modale avec du contenu spécifique
    const openModal = (content) => {
        console.log("Opening modal with content:", content);
        setModalContent(content);
        setIsModalOpen(true);
    };

    // Fonction pour fermer la modale
    const closeModal = () => {
        console.log("Closing modal.");
        setModalContent(null);
        setIsModalOpen(false);
    };

    return (
        <ModalContext.Provider value={{ isModalOpen, modalContent, openModal, closeModal }}>
            {children}
            {/* Composant Modal placé ici pour qu'il soit accessible partout */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Application Modal"
                className={styles.customModal} // Utiliser la classe du module CSS
                overlayClassName={styles.customOverlay} // Utiliser la classe du module CSS
                closeTimeoutMS={200} // Optionnel : pour les animations
            >
                <button onClick={closeModal} className={styles.closeButton}>
                    &times;
                </button>
                {modalContent}
            </Modal>
        </ModalContext.Provider>
    );
};
