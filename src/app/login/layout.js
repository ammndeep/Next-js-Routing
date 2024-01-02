import Link from 'next/link'
import React from 'react'
import './login.css'

const layout = ({ children }) => {
    return (
        < div >
            <ul className='header'>
                <li>
                    <Link href='/login'>Login Main</Link>
                </li>
                <li>
                    <Link href='/login/loginstudent'>Student Login</Link>
                </li>
                <li>
                    <Link href='/login/loginteacher'>Teacher Login</Link>
                </li>
            </ul >
            {children}
        </ div >
    )
}

export default layout
