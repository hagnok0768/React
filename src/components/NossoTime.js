import React from 'react';

const OurTeam = () => {
    return (
        <section id="nosso-time" className="py-5 bg-light">
            <div className="container d-flex justify-content-center align-items-center">
                <div className="col-md-6 mb-4 team-member">
                    <div className="card h-100 text-center p-3">
                        <h2 className="text-center">Nosso Time</h2>
                        <img src="/Img/team3.jpg" className="rounded-circle mx-auto d-block" style={{ width: '50px', height: '50px' }} alt="Vitor FM" />
                        <div className="card-body">
                            <h5 className="card-title">Vitor FM</h5>
                            <p className="card-text">Front-End</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;