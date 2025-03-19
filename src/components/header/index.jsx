'use client';
import {useState} from 'react'
import styles from './style.module.scss';
import Burger from './Burger';
import Stairs from './Stairs';
import Menu from './Menu';
import { AnimatePresence } from 'framer-motion';

export default function Header({menuLang}) {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <div className={styles.header}>
            <Burger openMenu={() => {setMenuIsOpen(true)}}/>
            <AnimatePresence mode="wait">
            {
                menuIsOpen && <>
                <Stairs />
                <Menu closeMenu={() => {setMenuIsOpen(false)}} menuLang={menuLang}/>
                </>
            }
            </AnimatePresence>
        </div>
    )
}