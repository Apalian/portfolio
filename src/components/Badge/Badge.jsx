// src/components/Badge/Badge.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Badge.module.css';

const Badge = ({ image, title }) => {
    return (
        <div className={styles.badge}>
            {image}
            <span className={styles.badgeTitle}>{title}</span>
        </div>
    );
};

Badge.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Badge;
