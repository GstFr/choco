
import './Item.css'
import { Link } from "react-router-dom"

const Item = ({ id, name, img, price, stock }) => {

    return (
        
      
            <div className="card text-center" >
                <img src={img} className="card-img-top imgItem" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Precio: ${price}</p>
                    <p className="card-text">Stock disponible:{stock}</p>
                    <button type="button" className="botonItem "><Link to={`/item/${id}`} className="optionItem">Ver detalle</Link></button>
                </div>
            </div>
        
        
    )
}

export default Item