import React, { Component } from 'react';

import d4Image from '../assets/images/d4.png';
import d6Image from '../assets/images/d6.png';
import d8Image from '../assets/images/d8.png';
import d10Image from '../assets/images/d10.png';
import d12Image from '../assets/images/d12.png';
import d20Image from '../assets/images/d20.png';



class Die extends React.Component {
    constructor() {
     super();
    
        this.state = { rolled: false, rollValue: null };
        this.rollDie = this.rollDie.bind(this);
    }


componentDidMount() {
    
}
    
rollDie = (props) => {
    if(!this.state.rolled) {
this.setState({rolled: !this.state.rolled});
     
        let score = Math.floor(Math.random() * this.state.value) + 1;
    
    return score;  
        
        }
    console.log(score)
}
    

    
    render () {
        const { value } = this.props;
        
        return (
            <div> 
             <img className="diceImage" alt="dice-image"  src={require(`../assets/images/d${value}.png`)} /> 
               
               <p>Dice level - I am a dice whose total value is {value}.</p> 
             
                {
                   !this.state.rolled ? (
                <div className="rollatron">
                <button onClick = {this.rollDie}> Roll a D{value} </button>
                </div>
                    ) :
                
                    (
                   <div className="result">
                    <p> You rolled a {this.score}! </p>            
                    </div>
                    )
                }   

            </div>

                
        )
    }
    
}

export default Die;
