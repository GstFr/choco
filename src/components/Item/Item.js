

import { Link } from "react-router-dom"


const Item = ({ id, name, img, price, stock }) => {

    return (
        <div className="col-xs-12 col-md-6 col-xl-3 mx-auto text-center">
            <div className="card" >
                <img src={img} className="card-img-top imgItem" alt={name} />
                <div className="cardBody">
                    <h4 className="cardTitle">{name}</h5>
                    <p className="cardText">Precio: ${price}</p>
                    <p className="cardText">Stock disponible:{stock}</p>
                    <botton type="button" className="buttonItem "><Link to={`/item/${id}`} className="optionItem">Ver detalle</Link></botton>
                </div>
            </div>
        </div>
    )
}

export default Item