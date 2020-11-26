import React, { Component } from 'react';
import Header from './Header';
import Image from '../assets/img/header-bg.jpg';

class Home extends Component {
    render(){
        return (
            <div>
                <Header 
                    title="Welcome to Our Studio"
                    subtitle="IT'S NICE TO MEET YOU"
                    buttonText="Tell me more"
                    showButton={true}
                    image={Image}
                />
            </div>
        )
    }
}

export default Home;