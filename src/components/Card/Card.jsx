import React, { useContext } from 'react';
import styles from './Card.module.css';
import { motion } from 'framer-motion';
import { ModalContext } from '../Modal/ModalContext';

function Card({ content, image }) {
    const { openModal } = useContext(ModalContext);

    const handleClick = () => {
        console.log(content);
        openModal(content);
        };

    return (
        <motion.div
            className={styles.card}
            whileHover={{
                y: -10,
                x: 10,
                transition: { duration: 0.3 },
            }}
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
        >
            <img className={styles.cardImage} src={image} alt="Card" />
        </motion.div>
    );
}

export default Card;
