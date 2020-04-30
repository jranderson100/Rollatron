import React, { Component } from 'react';

import d4Image from '../assets/images/d4.png';
import d6Image from '../assets/images/d6.png';
import d8Image from '../assets/images/d8.png';
import d10Image from '../assets/images/d10.png';
import d12Image from '../assets/images/d12.png';
import d20Image from '../assets/images/d20.png';

import Die from './Die';

class App extends React.Component {

    
 constructor() {
     super();
    this.state = { displayDice: false, selectedDie: null };
    this.handleChange = this.handleChange.bind(this);
     this.selectDie = this.selectDie.bind(this);
    
     }



handleChange(e){
    
    this.setState({selectedDie: e.target.value});
    
    
}; 
    
selectDie() {
     this.setState({displayDie: !this.state.displayDie});
}

    render() {

        return ( 
            
            < div >
            
                <div className='header'>
                    <img src={require('../assets/images/header_image.jpg')} alt='headerbanner' />
                </div>
            
                <h1> The Rollatron </h1>
            
                <h2> Choose a die! </h2>
            
                <select className="dice-list" onChange={this.handleChange}>
                    <option value="4">D4</option>
                    <option value="6">D6</option>
                    <option value="8">D8</option>
                    <option value="10">D10</option>
                    <option value="12">D12</option>
                    <option value="20">D20</option>
                </select>

                   
            { 
                this.state.displayDie ? (
        
                    <div>
                        <p> App level - Currently selected die is {this.state.selectedDie} </p>
                    
                    <Die value={this.state.selectedDie} />
              
                    </div>
                 ) : 
        
                    (<div>
                        <button onClick = {this.selectDie}>Select a dice!</button>
                        </div>
                    )
            
            }
            
            < /div>
            );
    }
}

export default App;
