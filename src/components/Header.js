import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {

    const [ burgerState, setBugerState ] = useState(false);
    const cars = useSelector(selectCars);

    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="logo" />
            </a>
            <Menu>
                { cars && cars.map((cars, index) => (
                    <a key={index} href="#">{cars}</a>
                ))}
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={() => setBugerState(true) } />
            </RightMenu>
            <BurgerNav show={burgerState}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBugerState(false) } />
                </CloseWrapper>
                { cars && cars.map((cars, index) => (
                    <li key={index}><a href="#">{cars}</a></li>
                ))}
                <li><a hre="#">Used Inventory</a></li>
                <li><a hre="#">Trade-in</a></li>
                <li><a hre="#">Cybertruck</a></li>
                <li><a hre="#">Roadaster</a></li>
                <li><a hre="#">Semi</a></li>
                <li><a hre="#">Charging</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    top: 0;
    left: 0;
    right: 0;
    min-height: 50px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    background-color: #b0c3d28a;
    z-index: 1;
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        padding: 0 10px;
        font-weight: 600;
        align-items: center;
        text-transform: uppercase;
    }
`;

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`;

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    width: 300px;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)' };
    transition: transform 0.2s ease-in-out;

    li {
        padding: 15px 0px;
        border-bottom: 1px solid rgba(0,0,0, .2);
        
        a{
            font-weight: 500;
        }
    }
`;

const CustomClose = styled(CloseIcon)``;

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
`;