import React, { Component } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
import {tryConvert, toCelsius, toFahrenheit} from "../libs/Converter";

export default class Calculator extends Component{
    constructor(props){
        super(props);
        this.state = {
            temparature: '',
            scale: 'c',
        }
    }

    handleCelciusChange = (temparature) => {
        this.setState({
            scale: 'c',
            temparature
        })
    }

    handleFahrenheitChange = (temparature) => {
        this.setState({
            scale: 'f',
            temparature
        })
    }
    
    render(){
        const temparature = this.state.temparature;
        const scale = this.state.scale;
        const celcius = scale === "f" ? tryConvert(temparature, toCelsius) : temparature;
        const fahrenheit = scale === "c" ? tryConvert(temparature, toFahrenheit) : temparature;
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-3">
                        <TemperatureInput 
                            scale="c"
                            temparature={celcius}
                            onTemparatureChange={this.handleCelciusChange}
                        />
                        <TemperatureInput 
                            scale="f"
                            temparature={fahrenheit}
                            onTemparatureChange={this.handleFahrenheitChange}
                        />
                        <BoilingVerdict celcius={parseFloat(celcius)}/>
                    </div>
                </div>
            </div>
        )
    }
}