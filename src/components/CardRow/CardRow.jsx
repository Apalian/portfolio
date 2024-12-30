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
        const calculatedPositions = refs.current.map((ref, index) =>
            ref ? getPosition(ref) : 0
        );
        setPositions(calculatedPositions);
    }, [cardsData]);

    return (
        <div className={styles.cardRow}>
            {cardsData.map((data, index) => {
                const offsetX = -( 180 + 250);
                const startX = (screenWidth - positions[index]) - offsetX;
                const endX = -positions[index] + offsetX;

                return (
                    <motion.div
                        key={index}
                        ref={(el) => (refs.current[index] = el)}
                        initial={{ x: positions[index] }}
                        variants={{
                            loopMove: { x: [startX, endX] },
                            invertLoopMove: { x: [endX, startX] },
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
