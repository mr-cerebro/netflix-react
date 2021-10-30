import './banner.css'
import hero from '../img/back.jpg'

const Banner = () => {
    return(
        <section className="banner">
            <>
                <img src={hero} className="hero" alt="Banner Netflix"/>
            </>
        </section>
    )
}

export default Banner