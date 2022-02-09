import React from 'react';
import '../css/footer.scss';

const Footer = () => {
    return <div>
        <div className="footer">
            <div className="container">
                <h5>Контакты</h5>
                <h2 className='tak-bold'>способы связи</h2>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-top">
                                <h3>Контакты</h3>
                                <span>Адрес:</span>
                                <p>г. Ташкент, Узбекистан Мирабадский р-н,ул. Мирабад 41/2 Посмотреть на карте</p>
                            </div>
                            <div className="card-body">
                                <span>Телефон:</span> <br />
                                <a href='tel:+998999992727' className='footer-tel'>+998 99 999 27 27</a>
                                <p>Почта:</p>
                                <a href='mailto:info@smartpackprint' className='footer-mail'>info@smartpackprint</a>
                                <div className="socials">
                            <img src="/img/instagram.png" alt="" />
                            <img src="/img/telegram.png" alt="" />
                            <img src="/img/facebook.png" alt="" />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 mt-5 mt-lg-0">
                        <div className="footer-map h-100">
                            <img width='100%' height='100%' src="/img/footerMap.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    <h6>smartpackprint 2022</h6>


    </div>;
};

export default Footer;
