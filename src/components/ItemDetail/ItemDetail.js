import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"

const ItemmDetail = ({ id, name, img, category, description, price, stock }) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }
        addItem(item, quantity)
    }
    return (
        <div className="text-center">
            <div className="card" >
                <img src={img} className="card-img-top imgDetail" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Categoría: {category}</p>
                    <p className="card-text">Descripcion: {description}</p>
                    <p className="card-text">Precio: ${price}</p>
                    <p className="card-text">Stock disponible:{stock}</p>
                    <footer className="Itemfooter">
                    {
                            quantityAdded > 0 ? (
                                <Link to='/cart' className='btn btn-primary'>Terminar compra</Link>
                            ) : (
                                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                            )
                        }
                        </footer>
                </div>
            </div>
        </div>
    )
}

export default ItemmDetail


