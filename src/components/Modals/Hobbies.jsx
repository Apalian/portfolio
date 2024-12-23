import React from 'react';
import styles from './Hobbies.module.css';

const Hobbies = () => {
    return (
        <div className={styles.hobbiesContainer}>
            <h2 className={styles.title}>My Hobbies</h2>
            <div className={styles.hobbiesList}>
                <div className={styles.hobby}>
                    <img src="/Climbing.svg" alt="Climbing" className={styles.icon} />
                    <p>Indoor Climbing</p>
                </div>
                <div className={styles.hobby}>
                    <img src="/Gym.svg" alt="Gym" className={styles.icon} />
                    <p>Weightlifting</p>
                </div>
                <div className={styles.hobby}>
                    <img src="/Travel.svg" alt="Travel" className={styles.icon} />
                    <p>Traveling (Tunisia, Ireland, Norway)</p>
                </div>
            </div>
        </div>
    );
};

export default Hobbies;
