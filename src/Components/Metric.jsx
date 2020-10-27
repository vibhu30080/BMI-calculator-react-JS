import React from "react";
import "./Component.css"

export default class Metric extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            height:"",
            weight:"",
            result:"",
            bmi:""
        }
    }
    
    calculate = () =>{
        
        let bmi = this.state.weight/this.state.height/this.state.height;
        let bmi1 = bmi.toFixed(3);
        this.setState({result: bmi1});
        this.bmiIndex(bmi1);

    };
    bmiIndex = (bmi) =>{
        if(bmi<18.5){
            this.setState({bmi:" You are  UNDER-WEIGHT"});
        }
        if(bmi>=18.5 && bmi<25){
            this.setState({bmi:" You are  Normal-WEIGHT"});
        }
        if(bmi>=25 && bmi<30){
            this.setState({bmi:" You are  Over-WEIGHT"});
        }
        if(bmi>=30){
            this.setState({bmi:" You are  Obese"});
        }
    };

    handleheight = (e) =>{
        this.setState({height : e.target.value})
    };

    handleweight = (e) =>{
        this.setState({weight : e.target.value})
    };

    render(){
        
        return(
            <div>
                <div className="calculator_body">
                    <div className="result">
                       Your BMI is: {"   "}
                       <span className="display">{this.state.result}</span>
                    </div>
                    <div className="category">
                       BMI Category: {"   "}
                       <span className="display">{this.state.bmi}</span>
                    </div>
                    <div className="buttons">
                        <div className="input_field">
                            <form>
                                <label>
                                    Height (in mtrs):
                                    <input type="number" id="height" value={this.state.height} onChange={this.handleheight} />
                                </label>
                            </form>
                        </div>
                        <div className="input_field">
                            <form>
                                <label>
                                    Weight (in Kgs):
                                    <input type="number" value={this.state.weight} onChange={this.handleweight} />
                                </label>
                            </form>
                        </div>
                        <button className="calculate_btn" onClick={this.calculate}>
                            CALCULATE
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}