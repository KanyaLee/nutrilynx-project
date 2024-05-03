import React from 'react';
import { useState, useEffect } from 'react';

import { Box, Typography, Button, Paper } from '@mui/material';
import { ImagesearchRoller } from '@mui/icons-material';

const imgs = [
    '/images/nutrilynx-herosection1.png',
    '/images/nutrilynx-herosection2.png'
]
const HeroSection:React.FC = () => { 
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => { 
        const interval = setInterval(()=>{
            setActiveStep((prev) => (prev + 1) % imgs.length );
        }, 3000);
        return () => clearInterval(interval);
    }, [])

    return <Box sx={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden'}}>
        {imgs.map((img, index) => (
            <Box 
                key={img}
                component="img"
                sx={{
                    position: 'absolute',
                    width:'100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'opacity 1s ease-in-out',
                    opacity: activeStep === index ? 1 : 0,
                }}
                src={img}
                alt={`Background ${index+1}`}
            />
        ))}

        <Box 
            sx={{
                position:'absolute',
                top: '40%',
                left: '30%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                textAlign: 'left',
                zIndex: 2,

        }}
        >
            <Typography variant="h3" component="h1" sx={{fontWeight: 'bold'}} gutterBottom>
                    YOUR PATH TO PERSONALIZED HEALTH
            </Typography>
            <Typography variant="h6" gutterBottom>
                    Explore custom dietary plans and Eco-friendly supplements tailored just for you
            </Typography>
            <Button variant="contained" sx={{ mt: 4, padding:'10px 50px' }}>
                    Join NutriLynx
            </Button>
        </Box>



    </Box>
}

export default HeroSection
