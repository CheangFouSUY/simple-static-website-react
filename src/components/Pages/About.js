import React, { Component } from 'react';
import Header from '../Pages/Header';
import Team from '../Pages/Team';
import History from '../Pages/History';
import Image from '../assets/img/about-bg.jpg';
class About extends Component {
    render(){
        return (
            <div>
                <Header 
                    title="About Us"
                    subtitle="Our Stories"
                    showButton={false}
                    image={Image}
                />
                <History />
                <Team />
                

            </div>
        )
    }
}

export default About;