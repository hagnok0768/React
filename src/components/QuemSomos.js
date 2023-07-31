import React from 'react';

const AboutSection = () => {
    return (
        <section id="quem-somos" className="py-5" style={{ height: '400px' }}>
            <div className="container">
                <div className="row">
                    <style>
                        {`
              /* cantos arredondados desejados */
              .rounded-corners {
                border-radius: 100px;
                /* Ajuste esse valor para controlar o grau de arredondamento */
                overflow: hidden;
                /* Garante que a imagem não ultrapasse os cantos arredondados */
              }
            `}
                    </style>
                    <div className="col-md-4">
                        <div className="rounded-corners mx-auto" style={{ width: '700px', height: '200px' }}>
                            <img src="Img/quemsomos.png" className="img-fluid" alt="Quem Somos" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <h2>Quem Somos</h2>
                        <p style={{ fontSize: '24px' }}>
                            Nossa missão é encantar e inspirar, trazendo até você o talento de artistas excepcionais do mundo todo. Cada
                            obra é cuidadosamente selecionada para despertar a sua curiosidade, trazer beleza ao seu lar e tornar
                            momentos especiais ainda mais memoráveis.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;