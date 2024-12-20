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

function CardRow({ cardsData }) {
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
                // Calcul de la position cible : xPosition * index + 1
                const startX =  0; // Utilise la position réelle ou 0 par défaut
                const offsetX = positions[index];
                const targetX = 250 + offsetX; // Applique la formule

                return (
                    <motion.div
                        key={index}
                        ref={(el) => (refs.current[index] = el)} // Associer chaque ref à un élément
                        initial={{ x: startX }}
                        animate={{ x: [-targetX, screenWidth - offsetX] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className={styles.motionCard}
                    >
                        <Card title={data.title} image={data.image} />
                    </motion.div>
                );
            })}
        </div>
    );
}

export default CardRow;
