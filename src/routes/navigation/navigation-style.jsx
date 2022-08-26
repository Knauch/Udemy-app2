import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavigationContainer = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 25px;
height: 70px;
width: 100%;
`;

export const Logo = styled(Link)`
    height: 60px;
    width: 70px;
    padding: 10px;
`
export const NavLinks = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
export const NavLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`


