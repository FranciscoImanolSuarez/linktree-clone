import React from 'react'
import style from './Header.module.css';
export default function Header() {
    return (
        <>
             <header>
            <img className={style.profile} src="https://avatars0.githubusercontent.com/u/28679360?s=460&u=043e532cfc62169437853995504c073352eca53f&v=4" alt="Imanol Suarez Foto" />
            <p className={style.username}>
                <a href="#">@FranciscoImanolSuarez</a>
            </p>
        </header>
        </>
    )
}
