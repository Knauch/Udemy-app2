import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as FabricLogo } from '../../ass/fabric.svg';
import { UserContext } from "../../contex/user.context";
import { CartContext } from "../../contex/card.context";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../../components/cart-icon/cart-icon";
import CardDropdown from '../../components/card-dropdown/card-dropdown';

import { NavigationContainer, Logo, NavLinks, NavLink } from './navigation-style';

const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)




    return (
        <Fragment>
            <NavigationContainer>
                <Logo to="/">
                    <FabricLogo />
                </Logo>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>

                    {currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>
                            SIGN OUT
                        </NavLink>
                    ) : (<NavLink to='/auth'>
                        SIGN IN
                    </NavLink>)}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CardDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )

}

export default Navigation