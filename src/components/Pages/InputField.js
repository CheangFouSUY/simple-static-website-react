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
                            value={this.props.value}
                            onChange={e => this.props.onChange(e)}
                        />
                    :   <div className="form-group">
                            <textarea 
                                className="form-control" 
                                id={this.props.name}
                                placeholder={this.props.placeholder}
                                required="required" 
                                data-validation-required-message="Please enter a message."
                                value={this.props.value}
                                onChange={e => this.props.onChange(e)}    
                            />
                        </div>
                    }
                <p className="help-block text-danger"></p>
            </div>
        )
    }
}

export default InputField;