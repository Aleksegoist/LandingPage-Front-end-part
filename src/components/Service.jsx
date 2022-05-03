import styled from 'styled-components';
import How from '../img/how.png';
import MiniCard from './MiniCard';
import Play from '../img/play.png';
import { useState } from 'react';

const Container = styled.div`
    display: flex;

    @media only screen and (max-width: 480px) {
        flex-direction: column;
    } ;
`;

const Left = styled.div`
    width: 50%;
    position: relative;

    @media only screen and (max-width: 480px) {
        display: none;
    } ;
`;

const Image = styled.img`
    display: ${(props) => props.open && 'none'};
    height: 100%;
    width: 70%;
    margin-left: 130px;
`;

const Video = styled.video`
    display: ${(props) => !props.open && 'none'};
    height: 300px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;

    @media only screen and (max-width: 480px) {
        width: 100%;
    } ;
`;

const Right = styled.div`
    width: 50%;

    @media only screen and (max-width: 480px) {
        width: 100%;
    } ;
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 480px) {
        padding: 20px;
    } ;
`;

const Title = styled.h1`
    @media only screen and (max-width: 480px) {
        font-size: 35px;
    } ;
`;
const Desc = styled.p`
    font-size: 20px;
    margin-top: 20px;
    color: #555;

    @media only screen and (max-width: 480px) {
        font-size: 18px;
    } ;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`;

const Button = styled.button`
    width: 180px;
    border: none;
    border-radius: 10px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    margin-top: 50px;
    display: flex;
    align-items: center;
`;

const Icon = styled.img`
    width: 20px;
    margin-right: 10px;
`;

const Modal = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
    position: absolute;
    background-color: white;
    padding: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    right: 5px;
    top: 30%;
`;

const Service = () => {
    const [open, setOpen] = useState(false);
    const smallScreen = window.screen.width <= 480 ? true : false;
    return (
        <Container>
            <Left>
                <Image open={open} src={How} />
                <Video
                    open={open}
                    autoPlay
                    loop
                    controls
                    src='https://youtu.be/dQw4w9WgXcQ'
                />
            </Left>
            <Right>
                <Wrapper>
                    <Title>Simple process to start</Title>
                    <Desc>
                        We provide a full range of services so that you have the
                        furniture of your dreams. Our measuring staff will
                        arrange the measurement of the premises; our designers
                        will help you to decide on the color and the choice of
                        materials. In the shortest possible time you will have a
                        3D layout of furniture. Further production and
                        installation of furniture in your room.
                    </Desc>
                    <CardContainer>
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                    </CardContainer>
                    <Button onClick={() => setOpen(true)}>
                        <Icon src={Play} />
                        How it works
                    </Button>
                </Wrapper>
            </Right>
            {smallScreen && open && (
                <Modal>
                    <Video
                        open={open}
                        autoPlay
                        loop
                        controls
                        src='https://youtu.be/dQw4w9WgXcQ'
                    />
                    <CloseButton onClick={() => setOpen(false)}>
                        Close
                    </CloseButton>
                </Modal>
            )}
        </Container>
    );
};

export default Service;
