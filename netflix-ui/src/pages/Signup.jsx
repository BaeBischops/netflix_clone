import React from 'react';
import styled from 'styled-components';
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';

export default function Signup() {
    return (
    <Container>
        <BackgroundImage />
        <Header />
    </Container>
    );
    
}

const Container = styled.div``;
