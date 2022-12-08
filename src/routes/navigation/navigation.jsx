import { Outlet } from "react-router-dom";
import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux'// for interaction from component with REDUX STORE

import { signOutStart } from "../../store(redux)/user/user.action";

import { selectIsCartOpen } from "../../store(redux)/cart/cart.selector";

import { ReactComponent as FabricLogo } from '../../ass/fabric.svg';

import { selectCurrentUser } from "../../store(redux)/user/user.selector";

import CartIcon from "../../components/cart-icon/cart-icon";
import CardDropdown from '../../components/card-dropdown/card-dropdown';

import { NavigationContainer, Logo, NavLinks, NavLink } from './navigation-style';

const Navigation = () => {
    // reciving all state object, and taking exactly user => curentUser (from redux store)
    const currentUser = useSelector(selectCurrentUser);

    const dispatch = useDispatch()

    const signOutUser = () => dispatch(signOutStart());

    //checking if currentUser or cart is Opened component changes => re-render navigation
    const isCartOpen  = useSelector(selectIsCartOpen)

    return (
        <Fragment>
            <NavigationContainer>
                <Logo to="/">
                    <FabricLogo />
                </Logo>
                <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CardDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
