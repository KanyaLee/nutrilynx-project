import React from 'react'
import styles from './styles/AboutSection.module.css'

const AboutSection = () => {

  return (

    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.title}>
                <h1>NutriLynx</h1>
            </div>
            <div className={styles.subtitle}>
                <h2>Empowering Your Well-being</h2>
            </div>
            <hr className={styles.decorativeLine} />
        </div>

        <div className={styles.content}>
            <p>Welcome to NutriLynx, where our vision for a healthier humanity and a flourishing planet comes to life. Our journey began with a question: How can we align the pursuit of personal 
                well-being with the urgent need to sustain our natural world? The answer led us to create NutriLynx - a pioneering digital platform at the vanguard of personalized nutrition,sustainable supplement solutions, and a holistic wellness center dedicated to the equilibrium of body, mind and environment. 

            <br></br> 
            <br></br> 
            
            Here, we intertwine the latest nutritional science with a deep-rooted ecological conscience, delivering a service that’s as kind to the Earth as it is to the human body.</p>
        </div>
    </div>
   
  )
}

export default AboutSection