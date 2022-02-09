import React from 'react';
import '../css/advantage.scss';

const Advantage = () => {
  return <>
        <div className="advantage">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                    <div className="card">
                            <div className="card-header">
                                <img src="/img/adv3.png" width='100%' alt="" />
                            </div>
                            <div className="card-body">
                                <h3 className='tak-bold'>Короткие сроки</h3>
                                <p>Срок выполнения заказов — от нескольких часов до суток. Всегда на складе запас бумаги разных сортов и плотностей. Время выполнения типового заказа — 24 часа.</p>
                            </div>
                        </div>                        
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                    <div className="card">
                            <div className="card-header">
                                <img src="/img/adv2.png" width='100%' alt="" />
                            </div>
                            <div className="card-body">
                                <h3 className='tak-bold'>Новейшее оборудование</h3>
                                <p>Для производства полиграфии в нашей типографии используется современное оборудование ведущих мировых производителей как Heidelberg, Konica Minolta, Horizon.</p>
                            </div>
                        </div>                        
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                    <div className="card">
                            <div className="card-header">
                                <img src="/img/adv1.png" width='100%' alt="" />
                            </div>
                            <div className="card-body">
                                <h3 className='tak-bold'>Выгодные цены</h3>
                                <p>Имея полностью оборудованные цеха для печати полиграфии в Ташкенте, компания print.uz обеспечивает своих заказчиков высококачественной полиграфией по лучшим ценам.</p>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
  
  </>;
};

export default Advantage;
