import React from 'react';
import styles from './Card.module.css'
import {motion} from "framer-motion";

function Card({title, image}) {

    return (
        <motion.div
            className={styles.card}
            whileHover={{
                y: -10,
                x: 10,
                transition: {duration: 0.3}
            }}
        >
            <img className={styles.cardImage} src={image} alt={title}/>
        </motion.div>
    );
}

export default Card;