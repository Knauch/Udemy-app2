
import { useContext } from 'react';
import { CartContext } from '../../contex/card.context';
import { ReactComponent as ShoppingIcon } from '../../ass/shopping-bag.svg';
import { CartIconContainer, ItemCount } from './cart-icon-stule'


const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  
    return (
      <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon' />
        <ItemCount>{cartCount}</ItemCount>
      </CartIconContainer>
    );
  };
  
  export default CartIcon;