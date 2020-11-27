import React, { Component } from 'react';
import Service from './Service';

const services = [
    {title:'E-Commerce', description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.", icon:"fa-shopping-cart"},
    {title:'Responsive Design', description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.", icon:"fa-laptop"},
    {title:'Web Security', description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.", icon:"fa-lock"}

];

class GroupServices extends Component {
    render(){
        return (
            <section className="page-section" id="services">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Services</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row text-center">
                        {services.map((service, i)=>{
                            return (
                                <Service key={i} {...service} />
                            )
                        })}
                        
                    </div>
                </div>
            </section>
        )
    }
}

export default GroupServices;