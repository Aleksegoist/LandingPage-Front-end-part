import styled from 'styled-components';

const Container = styled.div`
    margin-right: 50px;
    padding: 20px;
    -webkit-box-shadow: 7px 1px 15px 4px rgba(0, 0, 0, 0.79);
    box-shadow: 7px 1px 15px 4px rgba(0, 0, 0, 0.79);
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 480px) {
        margin-right: 0;
        margin-bottom: 10px;
        padding: 10px;
    } ;
`;

const PriceContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Price = styled.span`
    font-weight: bold;
    font-size: 50px;

    @media only screen and (max-width: 480px) {
        font-size: 30px;
    } ;
`;

const Type = styled.button`
    padding: 10px;
    margin: 10px 0;
    border: 1.7px solid crimson;
    color: crimson;
    background-color: white;
    border-radius: 20px;

    @media only screen and (max-width: 480px) {
        display: none;
    } ;
`;

const List = styled.ul`
    list-style: none;
`;

const ListItem = styled.li`
    margin: 30px 0;

    @media only screen and (max-width: 480px) {
        margin: 10px;
        font-size: 12px;
    } ;
`;

const Button = styled.button`
    border: none;
    background-color: darkblue;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: bold;
    padding: 15px;
    cursor: pointer;

    @media only screen and (max-width: 480px) {
        font-size: 12px;
        padding: 5px;
    } ;
`;

const PriceCard = ({ price, type }) => {
    return (
        <Container>
            <PriceContainer>
                $<Price>{price}</Price>/month
            </PriceContainer>
            <Type>{type} Plan</Type>
            <List>
                <ListItem>200 Hand-Crafted Templates</ListItem>
                <ListItem>Exclusive Support</ListItem>
                <ListItem>50+ PreBuilt Websites</ListItem>
                <ListItem>Premium Plugins</ListItem>{' '}
            </List>
            <Button>Join Now</Button>
        </Container>
    );
};

export default PriceCard;
