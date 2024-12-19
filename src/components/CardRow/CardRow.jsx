import React from "react";
import { motion } from "framer-motion";
import Card from "../Card/Card";
import styles from "./CardRow.module.css";

function CardRow({ cardsData, delay = 0 }) {
    const screenWidth = window.innerWidth;

    return (
        <div className={styles.cardRow}>
            {cardsData.map((data, index) => (
                <motion.div
                    variants={{
                        loopMove: { x: [screenWidth, -50] }, // Mouvement boucle (droite -> gauche)
                    }}
                    animate={"loopMove"} // Passe à la boucle après la première animation
                    transition={{
                        duration: 5, // Durée différente selon l'étape
                        ease: "linear",
                        repeat:  Infinity , // Boucle uniquement dans la deuxième phase
                    }}
                >
                    <Card title={data.title} image={data.image} />
                </motion.div>
                ))}
</div>
);
}

export default CardRow;
