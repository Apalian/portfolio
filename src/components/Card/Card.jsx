import React from 'react';
import styles from './Card.module.css'

function Card({title = "Mon Projet",
                  image = "url_vers_image"}) {

    return(

        <div className={styles.card}>
            <img className={styles.cardImage} src={image} alt={title}/>
        </div>

    );
}

export default Card;