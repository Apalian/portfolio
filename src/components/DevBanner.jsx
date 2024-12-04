import React from "react";

const DevBanner = () => {
    const bannerStyle = {
        backgroundColor: "#FFD700", // Couleur dorée pour attirer l'attention
        color: "#000", // Texte noir pour un bon contraste
        textAlign: "center",
        padding: "10px 0",
        fontSize: "14px",
        fontWeight: "bold",
        position: "fixed", // Toujours visible
        top: 0,
        width: "100%",
        zIndex: 1000, // Au-dessus des autres éléments
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    };

    return (
        <div style={bannerStyle}>
            ⚠️ Ce site est en cours de développement. Toutes les informations sont susceptibles d'être modifiées.
        </div>
    );
};

export default DevBanner;
