import React from 'react';
import styled from 'styled-components';
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';

export default function Signup() {
    return (
    <Container>
        <BackgroundImage />
        <Header />
        <div className="body flex column a-center j-center">
            <div className="text flex column">
                <h1>Unlimited movies, TV shows, and more</h1>
                <h4>Watch anywhere. Cancel anytime.</h4>
                <h6>Ready to watch? Enter your email to create or restart your membership.</h6>
            </div>
            <div className="form">
                <input type="email" name="email" id="email" placeholder="email address" />
                <input type="password" name="password" id="password" placeholder='password' />
                <button>Get Started</button>
            </div>
            <button>Log In</button>
        </div>
    </Container>
    );
    
}

const Container = styled.div``;
