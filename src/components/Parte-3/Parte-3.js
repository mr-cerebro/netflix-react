import '../Parte-2/parte-2.css'
import parte3 from '../img/part3.png'

const Parte3 = () => {
    return (
        <section className="parte-2">
            <div className="talk">
                <h1>Assista em todos os lugares.</h1>
                <p>Transmita filmes e programas de TV ilimitados em seu telefone, tablet, laptop e TV sem pagar mais.</p>
            </div>
            <div className="img">
                <img src={parte3} alt="Telefone, Table, Laptop e TV"/>
            </div>
        </section>
    )
}

export default Parte3