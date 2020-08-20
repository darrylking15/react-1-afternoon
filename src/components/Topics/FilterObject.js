import React, { Component } from 'react'

class FilterObject extends Component {
    constructor(){
        super()
        this.state = {
            unfilteredArray: [
                {
                    name: 'Jessica',
                    title: 'Manager', 
                    age: '37'
                }, 
                {
                    name: 'Ayesha',
                    weight: '1000', 
                    sex: 'female'
                }, 
                {
                    name: 'Kenneth',
                    career: 'Store Manager', 
                    car: 'lambo'
                } 

            ], 
            userInput: '', 
            filteredArray: [], 
        }
    }
    
    handleChange(val){
        this.setState({userInput: val})
    }

    filteredArray(prop){
        let unfilteredArray = this.state.unfilteredArray; 
        let filteredArray = [];

        for(let i = 0; i < unfilteredArray.length; i++){
            if(unfilteredArray[i].hasOwnProperty(prop)){
                filteredArray.push(unfilteredArray[i])

            }
        }
        this.setState({filteredArray: filteredArray})
    }
    
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                
                <h4>Filter Object</h4>
                <span className='puzzleText' >Original: {JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
                <input onChange={(e) => this.handleChange(e.target.value)} className="inputLine"></input>
                <button onClick={() => this.filteredArray(this.state.userInput)} className='confirmationButton'>Filter</button>
                <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}



export default FilterObject