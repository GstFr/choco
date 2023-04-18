

import { Link } from "react-router-dom"

const Item = ({ id, name, img, price, stock }) => {

    return (
        <div className="col-xs-12 col-md-6 col-xl-3 mx-auto text-center">
            <div className="card" >
                <img src={img} className="card-img-top imgItem" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Precio: ${price}</p>
                    <p className="card-text">Stock disponible:{stock}</p>
                    <botton type="button" className="botonItem "><Link to={`/item/${id}`} className="optionItem">Ver detalle</Link></botton>
                </div>
            </div>
        </div>
    )
}

export default Item