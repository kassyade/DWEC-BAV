import './Menu.css'; 


function Menu(){

    return(
        <nav className="menu">
            <ul className="menu-list">
                <li></li>
                <li><a href="#nosotros">Nosotros</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
            <h1>Parte visual (ubicación:App.jsx)</h1>
        </nav>
    );
}
export default Menu;