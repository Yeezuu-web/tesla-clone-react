import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section({ title, description, leftBtn, rightBtn, backgroundImg}) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{ title }</h1>
                    <p>{ description }</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            { leftBtn }
                        </LeftButton>
                        { rightBtn && 
                            <RightButton>
                                { rightBtn }
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                {rightBtn &&
                    <DownArrow src="/images/down-arrow.svg" />
                }
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    h1 {
        font-weight: 400;
        color: #000;
    }
    p {
        font-weight: 200;
        color: #5c5d61;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 760px) {
        flex-direction: column;
    }
`;

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.70;
    text-transform: uppercase;
    font-size: 14px;
    cursor: pointer;
    margin: 8px;
`;

const RightButton = styled(LeftButton)`
    background-color: #fff;
    opacity: 0.70;
    color: #000;
`;

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    cursor: pointer;
    -webkit-animation: slide-top 1.3s cubic-bezier(0.680, -0.550, 0.265, 1.550) 2s infinite alternate-reverse both;
	animation: slide-top 1.3s cubic-bezier(0.680, -0.550, 0.265, 1.550) 2s infinite alternate-reverse both;
    overflow-x: hidden;
`;

const Buttons = styled.div`
`;