import React, { Component } from 'react';

class InputField extends Component {
    render(){
        return(
            <div className={this.props.parentClass}>
                {this.props.elementName === "input"?
                        <input 
                            className="form-control" 
                            id={this.props.name}
                            type={this.props.type} 
                            placeholder={this.props.placeholder} 
                            required="required" d
                            ata-validation-required-message="Please enter your name." 
                            name={this.props.name}
                            onChange={this.props.onChange}
                            onBlur={this.props.onBlur}
                        />
                    :   <div className="form-group">
                            <textarea 
                                className="form-control" 
                                id={this.props.name}
                                placeholder={this.props.placeholder}
                                required="required" 
                                data-validation-required-message="Please enter a message."
                                name={this.props.name} 
                                onChange={this.props.onChange}
                                onBlur={this.props.onBlur}
                            />
                        </div>
                    }
                <p className="help-block text-danger">
                    {(this.props.touched && this.props.errors) && 
                        <span>{this.props.errors}</span>
                    }

                </p>
            </div>
        )
    }
}

export default InputField;