import styled from 'styled-components';
import App from '../img/app.png';
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
    display: flex;

    @media only screen and (max-width: 480px) {
        flex-direction: column;
        padding: 30px 20px;
    } ;
`;

const Left = styled.div`
    width: 50%;

    @media only screen and (max-width: 480px) {
        display: none;
    } ;
`;

const Image = styled.img`
    width: 75%;
    margin-top: 197px;
`;

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: 480px) {
        width: 100%;
    } ;
`;

const Title = styled.span`
    font-size: 70px;

    @media only screen and (max-width: 480px) {
        font-size: 43px;
    } ;
`;
const SubTitle = styled.span`
    font-size: 24px;
    font-style: italic;
    color: #333;
    margin-top: 30px;

    @media only screen and (max-width: 480px) {
        font-size: 20px;
    } ;
`;
const Desc = styled.p`
    font-size: 20px;
    color: #777;
    margin-top: 30px;

    @media only screen and (max-width: 480px) {
        font-size: 18px;
    } ;
`;
const Button = styled.button`
    width: 160px;
    border: none;
    padding: 18px 20px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    border-radius: 20px;
    margin-top: 20px;
    cursor: pointer;

    @media only screen and (max-width: 480px) {
        margin-top: 40px;
    } ;
`;

const About = () => {
    return (
        <Container>
            <Left>
                <Image src={App} />
            </Left>
            <Right>
                <Title>
                    <b>Good</b> design
                    <br />
                    <b>Good</b> furniture
                </Title>
                <SubTitle>
                    We know that good design means good furniture.
                </SubTitle>
                <Desc>
                    We help our customers to make their furniture ideas a
                    reality, as well as all kinds of design solutions that will
                    clearly fit into the home or office interior, and of course
                    look fantastic.
                </Desc>
                <Desc>
                    We care about the quality and uniqueness of your furniture
                    and guarantee that you will be 100% satisfied with our work.
                </Desc>
                <Button>Learn More</Button>
            </Right>
            <AnimatedShapes />
        </Container>
    );
};

export default About;
