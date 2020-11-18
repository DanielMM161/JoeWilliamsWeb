import React from 'react';
import './Buttons.css';
import { Link } from 'react-router-dom';

export const Button = ({text,type, clase, onClick}) => {
    return (
        <button type={type} className={`${clase} alignc justifyc`} onClick={onClick}>
            {text}
        </button>
    )
}

export const ButtonLink = ({text,type, clase, onClick}) => {
    return (
        <button type={type} className={`${clase} alignc justifyc`} onClick={onClick}>
            {
                <Link to="/home">{text}</Link>
            }
        </button>
    )
}