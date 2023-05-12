import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

const ItemmDetail = ({ product }) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
    
        addItem(product, quantity)
    }
    return (
        <div className="text-center">
            <div className="card" >
                <img src={product.img} className="card-img-top imgDetail" alt={product.name} />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Categoría: {product.category}</p>
                    <p className="card-text">Descripcion: {product.description}</p>
                    <p className="card-text">Precio: ${product.price}</p>
                    <p className="card-text">Stock disponible:{product.stock}</p>
                    <footer className="Itemfooter">
                    {
                            quantityAdded > 0 ? (
                                <Link to='/cart' className='btn btn-primary'>Terminar compra</Link>
                            ) : (
                                <ItemCount initial={1} stock={product.stock} onAdd={handleOnAdd} />
                            )
                        }
                        </footer>
                </div>
            </div>
        </div>
    )
}

export default ItemmDetail