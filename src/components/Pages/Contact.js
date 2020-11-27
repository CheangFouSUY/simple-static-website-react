import React, { Component } from 'react'
import InputField from './InputField';


const field ={
    sections:[
        [
            {parentClass:"form-group", name:"name", elementName:"input", type:"text", placeholder:"Your Name"},
            {parentClass:"form-group", name:"email", elementName:"input", type:"email", placeholder:"Your Email"},
            {parentClass:"form-group", name:"phone", elementName:"input", type:"text", placeholder:"Your Phone Number"}   
        ],
        [
            {parentClass:"form-group form-group-textarea mb-md-0", name:"message", elementName:"textarea", type:"text", placeholder:"Type Your Message"}
        ]
    ]
}

class Contact extends Component {
    constructor(props){
        super(props);

        this.state = {
            name:"",
            email:"",
            phone:"",
            message:""
        }
    }
    render(){
        return(
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <form id="contactForm" name="sentMessage" novalidate="novalidate">
                        <div className="row align-items-stretch mb-5">
                            {field.sections.map((section, sectionIndex)=>{
                                return (
                                    <div className="col-md-6" key={sectionIndex}> 
                                        {section.map((field, i)=>{
                                            return(
                                                <InputField 
                                                    key={i} 
                                                    {...field} 
                                                    value={this.state[field.name]}
                                                    onChange={e=>this.setState({
                                                        [field.name]: e.target.value
                                                    })}
                                                />
                                            )
                                        })}
                                    </div>
                                )
                            })}
                                
                        </div>
                        <div className="text-center">
                            <div id="success"></div>
                            <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default Contact;