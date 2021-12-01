import React from 'react'
import Accordion from '../Layout/Accordion';
import Footer from '../Layout/Footer';
import Services from '../Layout/Services';
import Wrapper from '../../HOC/Wrapper';
import Header from '../Layout/Header';
import About from './../Layout/About';
import Form from '../Layout/Form';
import Membership from './../Layout/membership';
import Download from '../Layout/Download';

const Home = () => {

    

    return (
        <Wrapper>
            <Header />
            <About />
            <Services />
            <Download />
            <Accordion />
            <Membership />
            <Form />
            <Footer />
        </Wrapper>
    )
}

export default Home
