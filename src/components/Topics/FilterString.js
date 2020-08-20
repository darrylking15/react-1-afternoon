import React, { Component } from 'react'

export default class FilterString extends Component {
    constructor(){
        super()
        this.state = {
            unFilteredString : ['King', 'Darryl', 'Tom', 'Eddie', 'Adrian'],
            userInput: '', 
            filteredString: []
        }
    }
    
    
    handleChange(val){
        this.setState({userInput: val})
    }
    
    
    filterNames = (userInput) =>{
        let unFilteredString = this.state.unFilteredString
        let filteredString = []

        for(let i = 0; i < unFilteredString.length; i++){
           if(unFilteredString[i].includes(userInput)){
               filteredString.push(unFilteredString[i])
           }
    }
    
        this.setState({filteredString: filteredString})
}



    render() {
        return ( 
            <div className="puzzleBox filterStringPB">
                 <h4> Filter String</h4>
                 <span className='puzzleText'>Names: {JSON.stringify(this.state.unFilteredString, null , 10)} </span>
                 <input onChange={(e) => this.handleChange(e.target.value)} className="inputLine"></input>
                 <button  onClick={() => this.filterNames(this.state.userInput) } className='confirmationButton'>Filter</button>
                 <span className='resultsBox filterStringRB'>Filtered Names: {JSON.stringify(this.state.filteredString, null, 10)}</span>
            </div>
        )
    }
}
