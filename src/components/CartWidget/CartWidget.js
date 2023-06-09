import Cart from './assets/cart.svg'
import './CartWidget.css'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' className='cart' >
            <img className='cart-img' src={Cart} alt="cart-widget" />
            {totalQuantity}
        </Link>
    )
}

export default CartWidget

