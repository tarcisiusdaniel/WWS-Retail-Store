import React from 'react';
import './style.css';
import { withRouter } from 'react-router-dom';

class AutoCompleteSearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: ['David', 'Daniel', 'Derrick', 'Dwayne'],
            suggestions: [],
            userInput: ''
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.selectSuggestion = this.selectSuggestion.bind(this);
        this.renderSuggestions = this.renderSuggestions.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         activeSuggestions: 0,
    //         suggestions: this.props.listOfSuggestions,
    //         filteredSuggestions: [],
    //         showSuggestions: false,
    //         userInput: ""
    //     }
    //     this.onChangeHandler = this.onChangeHandler.bind(this);
    // }

    // // Handle the user input and use the input as a filter for the suggestions
    // onChangeHandler (e) {
    //     const userInputHandler = e.target.value;
    //     const matchedUserInputSuggestions = this.state.suggestions.filter(
    //         (suggestion) => suggestion.toLowerCase().indexOf(userInputHandler.toLowerCase()) > -1
    //     );
    //     this.setState({
    //         activeSuggestions: 0,
    //         filteredSuggestions: matchedUserInputSuggestions,
    //         showSuggestions: true,
    //         userInput: e.target.value
    //     });
    // }

    // onClickHandler (e) {
    //     this.setState({ 
    //         activeSuggestions: 0,
    //         filteredSuggestions: [],
    //         showSuggestions: false,
    //         userInput: e.target.innerText
    //     });
    // }

    // onKeyDownHandler (e) {

    // }
    
    onChangeHandler(e) {
        const userInputHandler = e.target.value;
        let newSuggestions = [];

        if (userInputHandler.length > 0) {
            newSuggestions = this.state.items.filter(
                (item) => item.toLowerCase().indexOf(userInputHandler.toLowerCase()) > -1
            )
        }

        this.setState({
            suggestions: newSuggestions,
            userInput: userInputHandler
        });
    }

    renderSuggestions(){
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul class = "dropdown">
                {
                    suggestions.map(
                    (suggestion) => <li class = "dropdown-options" onClick = {() => this.selectSuggestion(suggestion)}>{suggestion}</li>
                )}
            </ul>
        );
    }

    selectSuggestion(value) {
        this.setState({
            userInput: value,
            suggestions: []
        })
    }
    
    onSubmitHandler(e) {
        e.preventDefault();
        this.props.history.push(`/search/${this.state.userInput}`)
    }

    render(){
        const { userInput } = this.state;
        return(
            <div class = "search-form">
                    <form onSubmit = {this.onSubmitHandler}>
                        <input 
                            type = "text"
                            value = {userInput} 
                            onChange = {this.onChangeHandler} 
                            class = "search-input" 
                        />
                        < button 
                            type = "submit" 
                            class = "submit-search-button" >
                            Search
                        </button>
                        {this.renderSuggestions()}
                    </form>
            </div>
        );
    }
}

export default withRouter(AutoCompleteSearchBar);