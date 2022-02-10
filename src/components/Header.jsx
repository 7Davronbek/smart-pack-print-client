import React from 'react';
import '../css/header.scss';

const Header = () => {
  return <>
    <div className="header d-flex align-items-end justify-content-center position-relative">
        <div className="container">
            <div className="header-btn"><a href='tel: +998943698058' className="btn myBtn">Связаться с нами</a></div>
        </div>
      {/* <div className="img"><img src="/img/header-bg.png" alt="" /></div> */}
    </div>
  
  </>;
};

export default Header;
