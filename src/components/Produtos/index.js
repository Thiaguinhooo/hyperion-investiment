import estilos from './produto.module.css';

export default function Produtos() {
    return (
        <section id='produto' className={estilos.produtos}>
            <div className={estilos.titutlo}>
                <h2>Nossos Produtos</h2>
                <p>
                    Aqui, reunimos os melhores produtos mais recentes do mercado, trazendo marcas renomeadas e essências marcantes que trazem luxo, elegância e personalidade ao seu estilo.
                </p>
                <p>
                    Autentidade garantida - As melhores marcas do mundo - Envio rápido e seguroll
                </p>

                <div className={estilos.hyperion_png}>
                    <div className={estilos.card_hyperion}>
                        <span className={estilos.selo}> Mais vendidos</span>
                        <h3>Camisa oversized</h3>
                        <picture>
                            <img src="./hyperion.png" alt='Camisa'></img>
                        </picture>
                        <p className={estilos.preco}>R$ 99,90</p>
                        <button className={estilos.botao}>Adquira</button>
                    </div>


                    <div className={estilos.card_hyperion}>
                        <span className={estilos.selo}>Novo</span>
                        <h3>Camisa oversized</h3>
                        <picture>
                            <img src="./hyperion.png" alt='Camisa'></img>
                        </picture>
                        <p className={estilos.preco}>R$ 99,90</p>
                        <button className={estilos.botao}>Adquira</button>
                    </div>
                

                    <div className={estilos.card_hyperion}>
                        <h3>Camisa oversized</h3>
                        <picture>
                            <img src="./hyperion.png" alt='Camisa'></img>
                        </picture>
                        <p className={estilos.preco}>R$ 99,90</p>
                        <button className={estilos.botao}>Adquira</button>
                    </div>
                

                    <div className={estilos.card_hyperion}>
                        <h3>Camisa oversized</h3>
                        <picture>
                            <img src="./hyperion.png" alt='Camisa'></img>
                        </picture>
                        <p className={estilos.preco}>R$ 99,90</p>
                        <button className={estilos.botao}>Adquira</button>
                    </div>
                </div>
            


            </div>
        </section>
    )
}