import  "../css/services-buttons.css";

function ServicesButtons() {
    return (
        <nav className='cat-image-container nav'>
            <a className="categ-image" href=''>
                <img src={require(`../images/electric.png`)} alt="electrics" className="serv-image-but"/>
            </a>
            <a className="categ-image" href=''>
                <img src={require(`../images/air.png`)} alt="airs" className="serv-image-but" />
            </a>
            <a className="categ-image" href=''>
                <img src={require(`../images/repairs.png`)} alt="repairs" className="serv-image-but"/>
            </a>
        </nav>
    );
}
export default ServicesButtons;