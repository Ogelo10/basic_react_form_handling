import React from 'react';

class FlavourForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: 'coconut'};
   
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({value: event.target.value})
    }
    handleSubmit(){
        alert('Your favourite flavour is: ' + this.state.value);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favourite flavour:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            
            </form>
        );
    }
}

export default FlavourForm;