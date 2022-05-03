import styled from 'styled-components';

const Container = styled.div`
    height: 10%;
    background-color: #111;
    color: lightgray;
`;

const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 480px) {
        padding: 10px;
    } ;
`;

const List = styled.li`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;

    @media only screen and (max-width: 480px) {
    } ;
`;

const ListItems = styled.ul`
    margin-right: 20px;
    cursor: pointer;

    @media only screen and (max-width: 480px) {
        margin-right: 10px;
        font-size: 14px;
        padding-left: 10px;
        margin-top: 15px;
    } ;
`;

const Copyright = styled.span`
    @media only screen and (max-width: 480px) {
        font-size: 14px;
        margin-top: 15px;
    } ;
`;

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <List>
                    <ListItems>Guide</ListItems>
                    <ListItems>Support</ListItems>
                    <ListItems>API</ListItems>
                    <ListItems>Community</ListItems>
                </List>
                <Copyright>AY. ©</Copyright>
            </Wrapper>
        </Container>
    );
};

export default Footer;
