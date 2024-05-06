import React from 'react';
import FeatureCard from '@/app/components/FeaturesCard';

const FeatureSection = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <FeatureCard 
            title={'Nutrition Designed By Science'} 
            description={'A scientific approach to nutritional health'} 
            backgroundImage={'/images/nutrilynx-feature1.png'} />

            <FeatureCard 
            title={'Earth-Source Health-Focused'} 
            description={'Sustainable and eco-friendly wellness solutions'} 
            backgroundImage={'/images/nutrilynx-feature2.png'} />

            <FeatureCard 
            title={'Essence of Nature'} 
            description={'Harness the natural benefits for holistic health'} 
            backgroundImage={'/images/nutrilynx-feature3.png'} />
        </div>
        
    )
}

export default FeatureSection