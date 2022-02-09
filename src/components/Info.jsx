import React from 'react';
import '../css/info.scss';


const Info = () => {
  return <><div className="info">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-12">
          <div className="info-img">
            <img src="/img/info.png" width='100%' alt="" />
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="info-text">
            <h2 className='tak-bold'>Информация</h2>
            <h3>О компании</h3>
            <h4>То, что важно</h4>
            <p>Мы — крупный игрок на рынке печатных услуг Ташкента, занимающий лидирующие места с 1997 года. Наш бизнес начался с производства пригласительных открыток вручную. С момента создания компании, мы ведём её к лидерству в масштабах всего Узбекистана. Мы двигаемся к нашей цели благодаря доверию, которое мы зарабатывали годы, благодаря команде профессионалов и новейшим технологиям.</p>
            <h6>| Более двух тысяч клиентов | Новейший парк печатных станков в Ташкенте | Постоянно растущая производственная мощность | Очный штат дизайнеров | Доставка по городу |</h6>
          </div>
        </div>
      </div>
    </div>
  </div></>;
};

export default Info;
