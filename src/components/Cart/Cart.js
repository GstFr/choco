import './Cart.css'
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from '../cartItem/cartItem'



const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)



    if (totalQuantity === 0) {
        return (
            <div className='SinItems'>
                <h1>No hay Items en el carrito</h1>
                <Link to='/' className="btn btn-light" >Ver todos los Productos</Link>
            </div>
        )
    }

    return (
        <>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <div className="CartBox">
                <h3 className='CartTotal'> Total: ${total}</h3>
                <button onClick={() => clearCart()} className="btn btn-primary buttonLimpiar">Limpiar carrito</button>
                < button type="button" className="btn btn-warning buttonChecout" ><Link to='/checkout' className='chekoutLink' >Checkout Order</Link></button >
            </div>
        </>
    )
}

export default Cart
