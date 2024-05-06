// src/components/FeatureCard.tsx
import React from 'react';
import styles from './FeaturesCard.module.css';

interface FeatureCardProps {
    title: string;
    description: string;
    backgroundImage: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, backgroundImage }) => {
    return (
        <div className={styles.card}>
            <img src={backgroundImage} alt={title} className={styles.cardImage} />
            <div className={styles.cardOverlay}></div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
