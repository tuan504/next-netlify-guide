import React from 'react';
import styles from '../styles/Button.module.scss'
import Link from 'next/link';

const STYLESvar = [styles.btnprimary, styles.btnoutline];

const SIZES = [styles.btnmediuim, styles.btnlarge];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    const checkButtonStyle = STYLESvar.includes(buttonStyle) 
        ? buttonStyle 
        : STYLESvar[0];
    
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(
        <Link href= '/sign-up'>
            <a className = {styles.btnmobile}>
            <button 
            className={`${styles.btn} ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
            </a>
        </Link>
    )

};