import './banner.css'
import hero from '../img/back.jpg'

const Banner = () => {
    return(
        <section className="banner">
            <img src={hero} className="hero" alt="Banner Netflix"/>
            <div className="box">
                <div className="heading">
                    <h2>Filmes ilimitados, programas de TV e muito mais.</h2>
                    <h5>Assista em qualquer lugar. Cancele a qualquer momento.</h5>
                    <p>Pronto para assistir? Digite seu e-mail para criar ou recriar sua associação.</p>
                </div>
                <div className="search">
                    <input type="email" placeholder="Endereço de E-mail"/>
                    <a href="/">Iniciar</a>
                </div>
            </div>
        </section>
    )
}

export default Banner