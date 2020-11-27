import React, { Component } from 'react';
import Header from './Header';
import Image from '../assets/img/header-bg.jpg';
import GroupServices from './GroupServices';
import GroupPortfolio from './GroupPortfolio';
import Team from './Team';
import GroupClient from './GroupClient';
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

                <GroupServices />
                <GroupPortfolio />
                <Team />
                <GroupClient />

            </div>
        )
    }
}

export default Home;