import { 
    ProductCardContainer,
    Footer,
    Name,
    Price
} from './product-card-style';

import Button, {BUTTON_TYPE_CLASSES} from '../button/button'
import { useContext } from 'react';
import { CartContext } from '../../contex/card.context';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext)

    const addProductToCart = () => addItemToCart(product)

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />

            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
                Add to card
            </Button>
        </ProductCardContainer>
    )
}

export default ProductCard