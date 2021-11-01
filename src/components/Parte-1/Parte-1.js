import './parte-1.css'
import parte1 from '../img/part1.png'

const Parte1 = () => {
    return(
        <section className="parte-1">
            <div className="talk">
                <h1>Desfrute na sua TV</h1>
                <p>Assista em Smart TV's, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players e muito mais</p>
            </div>
            <div className="img">
                <img src={parte1} alt="TVs"/>
            </div>
        </section>
    )
}

export default Parte1