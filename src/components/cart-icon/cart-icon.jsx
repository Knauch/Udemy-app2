import { useDispatch, useSelector } from 'react-redux';

import { selectCartCount, selectIsCartOpen } from '../../store(redux)/cart/cart.selector';
import { setIsCartOpen } from '../../store(redux)/cart/cart.action';

import { ReactComponent as ShoppingIcon } from '../../ass/shopping-bag.svg';
import { CartIconContainer, ItemCount } from './cart-icon-stule'


const CartIcon = () => {

  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;