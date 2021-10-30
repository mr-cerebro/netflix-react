import './header.css'
import logo from '../img/logo.png'

const Header = () => {
    return(
        <section className="container">
            <div className="head">
                <img src={logo} alt="Logotipo Netflix"/>
                <a href="/">Entrar</a>
            </div>
        </section>
    )
}

export default Header