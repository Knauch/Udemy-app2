import Button from '../button/button';
import CartItem from '../cart-utem/cart-item';
import { useContext } from 'react';
import { CartContext } from '../../contex/card.context';
import { useNavigate } from 'react-router-dom';

import './card-dropdown.scss';

const CardDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <div className="cart-dropdown-container">
            <div className='cart-items'>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                    ))
                ) : (
                    <span className='empty-message'>Your cart is empty</span>
                )
                }
            </div>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </div>
    )

}

export default CardDropdown