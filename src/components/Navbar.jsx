import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import '../css/navbar.scss';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const changeNavbar = () => {
        if (window.scrollY >= 30) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavbar);

    const location = useLocation()


    return <>
            <div className={`Navbar ${location.pathname === '/' ? '' : 'top'} ${navbar ? 'active' : ''}`}>
                <div className="container">
                    <div className="row w-100 justify-content-center align-items-center">
                        <ul className="nav-list col-5  justify-content-end d-flex align-items-center">
                            <li><Link to='/about-us' className="nav-list__link">О нас</Link></li>
                            <li><Link to='/services' className="nav-list__link">Услуги</Link></li>
                            <li><Link to='/portfolio' className="nav-list__link">Портфолио</Link></li>
                        </ul>
                        <div className="logo col-1">
                            <Link to='/' className="logo__link"><img src="/img/logo.png" alt="" /></Link>
                        </div>
                        <ul className="nav-list col-5 justify-content-start d-flex align-items-center">
                        <li><Link to='/clients' className="nav-list__link">Клиенты</Link></li>
                            <li><Link to='/team' className="nav-list__link">Команда</Link></li>
                            <li><Link to='/' className="nav-list__link">Контакты</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {location.pathname === '/' ? '' : <div className="navbarLine"></div>}

    </>;
};

export default Navbar;
