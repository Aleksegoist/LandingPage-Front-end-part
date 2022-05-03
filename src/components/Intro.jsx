import styled from 'styled-components';
import Woman from '../img/woman1.png';
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    padding: 20px;

    @media only screen and (max-width: 480px) {
        flex-direction: column;
    } ;
`;
const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 480px) {
        width: 100%;
        height: 100%;
    } ;
`;

const Title = styled.h1`
    width: 60%;
    font-size: 60px;

    @media only screen and (max-width: 480px) {
        width: 100%;
        font-size: 50px;
    } ;
`;

const Desc = styled.p`
    width: 60%;
    font-size: 20px;
    margin-top: 20px;

    @media only screen and (max-width: 480px) {
        width: 100%;
        font-size: 16px;
    } ;
`;

const Info = styled.div`
    width: 60%;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 480px) {
        width: 100%;
        flex-direction: column;
    } ;
`;

const Button = styled.button`
    padding: 15px;
    background-color: darkblue;
    color: white;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    letter-spacing: 2px;
    cursor: pointer;

    @media only screen and (max-width: 480px) {
        margin-bottom: 20px;
    } ;
`;

const Contact = styled.div`
    display: flex;
    flex-direction: column;
`;

const Phone = styled.span`
    color: #cf0e0e;
    font-weight: bold;

    @media only screen and (max-width: 480px) {
        color: black;
    } ;
`;

const ContactText = styled.span`
    color: gray;
    margin-top: 5px;
`;

const Right = styled.div`
    width: 40%;

    @media only screen and (max-width: 480px) {
        display: none;
    } ;
`;

const Image = styled.img`
    width: 82%;
    margin-left: 60px;
`;

const Intro = () => {
    return (
        <Container>
            <Left>
                <Title>Furniture is our life and your style!</Title>
                <Desc>
                    We believe that designing furniture and our services in
                    close cooperation with our customers - the only way to
                    really affect your interior.
                </Desc>
                <Info>
                    <Button>START A PROJECT</Button>
                    <Contact>
                        <Phone>Call us +38(068) 111-77-55</Phone>
                        <ContactText>For any questions</ContactText>
                    </Contact>
                </Info>
            </Left>
            <Right>
                <Image src={Woman} />
            </Right>
            <AnimatedShapes />
        </Container>
    );
};

export default Intro;
