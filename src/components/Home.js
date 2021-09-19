import React from 'react';
import styled from 'styled-components';
import Section from './Section';

const Home = () => {
    return (
        <Container>
            <Section 
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtn="custom order"
                rightBtn="exsiting inventory"
            />
            <Section 
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtn="custom order"
                rightBtn="exsiting inventory"
            />
            <Section 
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtn="custom order"
                rightBtn="exsiting inventory"
            />
            <Section 
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtn="custom order"
                rightBtn="exsiting inventory"
            />
            <Section 
                title="Solar Panels"
                description="Lowest Cost Solar Panels in America"
                backgroundImg="solar-panel.jpg"
                leftBtn="order now"
                rightBtn="learn More"
            />
            <Section 
                title="Solar Roof"
                description="Produce Clean Energy From Your Roof"
                backgroundImg="solar-roof.jpg"
                leftBtn="order now"
                rightBtn="learn More"
            />
            <Section 
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtn="shop now"
                rightBtn=""
            />
        </Container>
    )
};

export default Home;

const Container = styled.div`
    height: 100vh;
`;
