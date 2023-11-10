import "../css/service-card.css"

function ServiceCard( {backgrColor, imagePath, text, title} ) {
    
    const cardStyle={
        backgroundColor: backgrColor
    }
    
    return(
        <div className="service-card-container" style={cardStyle}>
            <div className="service-card-inner-container">
                <div className="service-image-container">
                    <img className="service-image" src={imagePath} alt="service" />
                </div>
                <div className="service-text-container">
                    <p className="service-text">{text.split(' ').map((word, index)=>{
                        if(word === "Remodelación")
                        {
                            return(<b key={index}>REMODELACIÓN</b>)
                        }
                        else
                        {
                            return(word+" ")
                        }
                        })} <b>{title}</b>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default ServiceCard