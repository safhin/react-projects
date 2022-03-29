import React, { Component } from "react";
const ScalaeNames = {
    c : "Celcius",
    f : "Fahrenheit"
}
export default class TemperatureInput extends Component{
    constructor(props){
        super(props);
    }

    handleChange = (e) => {
        this.props.onTemparatureChange(e.target.value);
    }

    render(){
        const temparature = this.props.temparature;
        const scale = this.props.scale;
        return(
            <legend>
                <div className="form-group">
                    <fieldset>Enter temperature in {ScalaeNames[scale]}</fieldset>
                    <input className="form-control" value={temparature} placeholder="Enter scale" onChange={this.handleChange}/>
                </div>
            </legend>
        )
    }
}