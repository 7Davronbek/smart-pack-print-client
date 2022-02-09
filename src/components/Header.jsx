import React from 'react';
import { Link } from 'react-router-dom';    
import '../css/header.scss';

const Header = () => {
  return <>
    <div className="header d-flex align-items-end justify-content-center position-relative">
        <div className="container">
            <div className="header-btn"><Link className="btn myBtn">Связаться с нами</Link></div>
        </div>
      {/* <div className="img"><img src="/img/header-bg.png" alt="" /></div> */}
    </div>
  
  </>;
};

export default Header;
