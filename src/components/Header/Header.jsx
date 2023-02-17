import React from 'react';
import s from './Header.module.css'


const Header = () => {
    return (
        <header>
            <div className={s.container__header}>
                <h1>TO DO</h1>
            </div>
        </header>
    );
};

export default Header;