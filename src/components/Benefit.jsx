import React from 'react';
import '../css/benefit.scss';

const Benefit = () => {
  return <>
    <div className="benefit">
        <div className="container">
            <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="benefit-text">
            <h2 className='tak-bold'>Преимущества</h2>
            <h3>Вопрос-ответ</h3>
            <h4>Почему именно мы?</h4>
            <p>Мы думаем, потому что, мы заботимся о наших клиентах. Оказывая полный спектр полиграфических и дизайнерских услуг, выполняя заказы в кратчайшие сроки, мы стремимся к удовлетворению каждой потребности клиента.</p>
            <h5>Быстро сделать получится?</h5>
            <h5>Какое оборудование вы используете?</h5>
          </div>
        </div>
            <div className="col-lg-6">
          <div className="benefit-img">
            <img src="/img/benefit.png" width='100%' alt="" />
          </div>
        </div>
            </div>
        </div>
    </div>
  
  
  </>;
};

export default Benefit;
