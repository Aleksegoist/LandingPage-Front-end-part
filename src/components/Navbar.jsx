import React from 'react';
import styled from 'styled-components';
import Chair from '../img/logo.png';

const Container = styled.div`
    height: 50px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.img`
    width: 20%;

    @media only screen and (max-width: 480px) {
        width: 80%;
    } ;
`;

const Menu = styled.ul`
    display: flex;
    list-style: none;

    @media only screen and (max-width: 480px) {
        display: none;
    } ;
`;
const MenuItem = styled.li`
    margin-right: 30px;
    font-size: 20px;
    font-weight: bold;
    color: gray;
    cursor: pointer;
`;

const Button = styled.button`
    border: 2px solid white;
    padding: 10px 15px;
    background-color: crimson;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo src={Chair} />
                    <Menu>
                        <MenuItem>Home</MenuItem>
                        <MenuItem>Home</MenuItem>
                        <MenuItem>Services</MenuItem>
                        <MenuItem>Products</MenuItem>
                        <MenuItem>Contacts</MenuItem>
                    </Menu>
                </Left>
                <Button>JOIN TODAY</Button>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
