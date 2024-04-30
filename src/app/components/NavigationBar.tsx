
// src/app/components/NavigationBar.tsx
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import styles from  './NavigationBar.module.css';
import PinDropIcon from '@mui/icons-material/PinDrop';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavigationBar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.logo}>
            <Link href="/"><Image src="/images/nutrilynx-logo.png" alt="" width={50} height={50} ></Image></Link>
        </div>
        <div className={styles.links}>
            <Link href="/about-us">About Us</Link>
            <Link href="/dietary-plan">Dietary Plan</Link>
            <Link href="/supplements">Supplements</Link>
            <Link href="/wellness">Wellness</Link>
            <Link href="/assessment">Assessment</Link>
        </div>
        <div className={styles.icons}>
            <Link href="/locations"><PinDropIcon /></Link>
            <Link href="/auth"><AccountCircleIcon /></Link>
            <Link href="/cart"><ShoppingCartIcon /></Link>
        </div>
    </nav>
  );
};

export default NavigationBar;
