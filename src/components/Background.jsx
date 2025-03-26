// Background.js

import React, { useEffect } from 'react';
import { animate } from 'popmotion';
import './Background.css'; // Pour les styles spécifiques au fond

const Background = () => {
    const shapes = Array.from({ length: 128 }, (_, i) => ({
        id: i,
        top: Math.random() * 90,
        left: Math.random() * 90,
        size: Math.random() * 60 + 20,
        opacity: Math.random() * 0.3 + 0.1,
        rotation: Math.random() * 360, // Initial rotation
        duration: 40000
    }));

    useEffect(() => {
        shapes.forEach(shape => {
            const animateMovement = () => {
                animate({
                    from: { top: shape.top, left: shape.left },
                    to: { top: Math.random() * 90, left: Math.random() * 90 },
                    duration: shape.duration,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    onUpdate: ({ top, left }) => {
                        const element = document.getElementById(`shape-${shape.id}`);
                        if (element) {
                            element.style.top = `${top}vh`;
                            element.style.left = `${left}vw`;
                        }
                    }
                });
            };

            const animateRotation = () => {
                animate({
                    from: shape.rotation,
                    to: shape.rotation + 360,
                    duration: shape.duration * 2,
                    repeat: Infinity,
                    onUpdate: rotation => {
                        const element = document.getElementById(`shape-${shape.id}`);
                        if (element) {
                            element.style.transform = `rotate(${rotation}deg)`;
                        }
                    }
                });
            };

            animateMovement();
            animateRotation();
        });
    }, [shapes]);

    return (
        <div className="shapes-container">
            {shapes.map(shape => (
                <div
                    key={shape.id}
                    id={`shape-${shape.id}`}
                    className="shape"
                    style={{
                        top: `${shape.top}vh`,
                        left: `${shape.left}vw`,
                        width: `${shape.size}px`,
                        height: `${shape.size}px`,
                        opacity: shape.opacity,
                        transform: `rotate(${shape.rotation}deg)`
                    }}
                ></div>
            ))}
        </div>
    );
};

export default Background;
