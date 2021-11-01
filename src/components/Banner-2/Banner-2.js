import './banner-2.css'

const Banner2 = () => {
    return(
        <section className="banner-2">
            <div className="box">
                <div className="heading">
                    <p>Pronto para assistir? Digite seu e-mail para criar ou recriar sua associação</p>
                </div>
                <div className="search">
                    <input type="email" placeholder="Endereço de e-amil"/>
                    <a href="/">Iniciar</a>
                </div>
            </div>
        </section>
    )
}

export default Banner2