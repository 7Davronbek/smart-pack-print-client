import React from 'react';
import '../css/team.scss';


const Team = () => {
    return <div>
        <div className="ourTeam">
            <div className="container">
                <p>Персонал</p>
                <h2 className="tak-bold">наша команда</h2>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 mb-3">
                        <div className="card">
                            <div className="card-top">
                                <img width='100%' src="/img/team1.jpg" alt="" />
                            </div>
                            <div className="card-body">
                                <span>ikasimov</span>
                                <h4>abdulloh</h4>
                                <p>арт директор</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mb-3">
                        <div className="card">
                            <div className="card-top">
                                <img width='100%' src="/img/team1.jpg" alt="" />
                            </div>
                            <div className="card-body">
                                <span>ikasimov</span>
                                <h4>abdulloh</h4>
                                <p>арт директор</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mb-3">
                        <div className="card">
                            <div className="card-top">
                                <img width='100%' src="/img/team1.jpg" alt="" />
                            </div>
                            <div className="card-body">
                                <span>ikasimov</span>
                                <h4>abdulloh</h4>
                                <p>арт директор</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </div>;
};

export default Team;
