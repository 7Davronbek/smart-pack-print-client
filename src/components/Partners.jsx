import React from 'react';
import '../css/partners.scss';


const Partners = () => {
  return <>
    <div className="partners">
        <div className="container">
            <h5>Клиенты</h5>
            <h2 className='tak-bold'>нам доверяют</h2>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                    <div className="card"><img width='100%' src="/img/oqtepa_partner.png" alt="" /></div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                    <div className="card"><img width='100%' src="/img/oqtepa_partner.png" alt="" /></div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                    <div className="card"><img width='100%' src="/img/oqtepa_partner.png" alt="" /></div>
                </div>
            </div>
        </div>
    </div>

  </>;
};

export default Partners;
