import './parte-2.css'
import parte2 from '../img/part2.jpg'

const Parte2 = () => {
    return(
        <section className="parte-2">
            <div className="img">
                <img src={parte2} alt="Telefone"/>
            </div>
            <div className="talk">
                <h1>Assista em todos os lugaresBaixe seus programas para assistir offline.</h1>
                <p>Transmita filmes e programas de TV ilimitados em seu telefone, table, laptop e tv sem pagar mais.Salve seus favoritos com facilidade e tenha sempre algo para assistir.</p>
            </div>
        </section>
    )
}

export default Parte2