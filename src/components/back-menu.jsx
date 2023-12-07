import { Link } from 'react-router-dom';

function BackMenu ()
{
    return(
        <div className="back-menu-container">
            <Link to='/Proyectos' className="arrow-title">
                <div className="backArrowImage">
                    <img className="mobileHidden arrow-image" alt="logo" src={require(`../images/backArrow.png`)}/>
                </div>
                <p className='back-text'>REGRESAR AL MENÚ</p>
            </Link>
        </div>
    );
}
export default BackMenu;
