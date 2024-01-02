import React from 'react'
import './about.css'
import Link from 'next/link'

const layout = ({ children }) => {
    return (
        < div >
            <ul className='header'>
                <li>
                    <Link href='/about'>About Panel</Link>
                </li>
                <li>
                    <Link href='/about/aboutcollege'>Teacher Info</Link>
                </li>
                <li>
                    <Link href='/about/aboutstudent'>Student Info</Link>
                </li>
            </ul >
            {children}
        </ div >
    )
}

export default layout
