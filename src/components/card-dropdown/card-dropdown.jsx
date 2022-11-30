import Button from '../button/button';
import CartItem from '../cart-utem/cart-item';

import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectIsCartOpen } from '../../store(redux)/cart/cart.selector';
import { useNavigate } from 'react-router-dom';

import { setIsCartOpen } from '../../store(redux)/cart/cart.action';

import { 
    CartDropdownContainer, 
    EmptyMessage, 
    CartItems,
} from './card-dropdown-style';

const CardDropdown = () => {
    const cartItems  = useSelector(selectCartItems);
    const navigate = useNavigate()

    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);

    const goToCheckoutHandler = () => {
        navigate('/checkout');
        dispatch(setIsCartOpen(!isCartOpen));
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    ))
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )
                }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )

}

export default CardDropdown