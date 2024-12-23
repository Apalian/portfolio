import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Card from "../Card/Card";
import styles from "./CardRow.module.css";

// Fonction pour obtenir la position d'un élément
function getPosition(element) {
    let xPosition = 0;

    while (element) {
        xPosition += element.offsetLeft + element.clientLeft;
        element = element.offsetParent;
    }
    return xPosition; // Retourne seulement la coordonnée X
}

function CardRow({ cardsData, delay = 0, animation = "loopMove"}) {
    const screenWidth = window.innerWidth;
    const refs = useRef([]); // Tableau de références pour les cartes
    const [positions, setPositions] = useState([]); // État pour stocker les positions

    useEffect(() => {
        // Récupère les positions des cartes après le rendu
        const calculatedPositions = refs.current.map((ref, index) =>
            ref ? getPosition(ref) : 0
        );
        setPositions(calculatedPositions); // Stocke les positions dans le state
    }, [cardsData]); // Exécuter après le rendu des cartes

    return (
        <div className={styles.cardRow}>
            {cardsData.map((data, index) => {
                const startX =  0;
                const offsetX = positions[index];
                const targetX = 1000 + offsetX;

                return (
                    <motion.div
                        key={index}
                        ref={(el) => (refs.current[index] = el)}
                        initial={{ x: startX }}
                        variants={{
                            loopMove: { x: [screenWidth - offsetX,-targetX] },
                            invertLoopMove: { x: [500  - targetX, screenWidth - offsetX + 500] },
                        }}
                        animate={animation}
                        transition={{
                            duration: 21,
                            repeat: Infinity,
                            ease: "linear",
                            delay:index * 3 + delay,
                        }}
                        className={styles.motionCard}
                    >
                        <Card content={data.content} image={data.image} />
                    </motion.div>
                );
            })}
        </div>
    );
}

export default CardRow;
