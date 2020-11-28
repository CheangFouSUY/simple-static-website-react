import React, { Component } from 'react'
import InputField from './InputField';
import { withFormik } from 'formik';
import * as Yup from 'yup';

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

    render(){
        return(
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <form id="contactForm" name="sentMessage" novalidate="novalidate" onSubmit={this.props.handleSubmit}>
                        <div className="row align-items-stretch mb-5">
                            {field.sections.map((section, sectionIndex)=>{
                                return (
                                    <div className="col-md-6" key={sectionIndex}> 
                                        {section.map((field, i)=>{
                                            return(
                                                <InputField 
                                                    key={i} 
                                                    {...field} 
                                                    value={this.props.values[field.name]}
                                                    name={field.name}
                                                    onChange={this.props.handleChange}
                                                    onBlur={this.props.handleBlur}
                                                    touched={this.props.touched[field.name]}
                                                    errors={this.props.errors[field.name]}
                                                />
                                            )
                                        })}
                                    </div>
                                )
                            })}
                                
                        </div>
                        <div className="text-center">
                            <div id="success"></div>
                            <button 
                                className="btn btn-primary btn-xl text-uppercase" 
                                id="sendMessageButton" 
                                type="submit"
                            >Send Message</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default withFormik({
    mapPropsToValue: () => ({
        name:"",
        email:"",
        phone:"",
        message:"",
    }),
    
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, "Name should be at least 3 characters").required("Name is needed!"),
        email: Yup.string().email("Invalid Email Format").required("Email is needed!"),
        phone: Yup.string()
            .min(10, "Phone Number Not Long Enough!")
            .max(15, "Phone Number Too Long!")
            .required("Phone Number is Needed!"),
        message: Yup.string().min(500, "More detail information is needed")
            .required("Message is needed!")
    }),

    handleSubmit: (values, {setSubmitting}) => {
        alert("You have submitted the form", JSON.stringify(values));
    }
})(Contact);