import React, { Component } from 'react'
import './styles/header.css'


export default class Header extends Component {

    constructor(props){
        super(props);
        this.state = {value:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.history.push(`/search/${this.state.value}`);
    }

    render() {
        return <header>
            <div className="divLogo">
                <p className="logo">netflixroulette</p>
            </div>
            <h3>FIND YOUR MOVIE</h3>
            <form className="searchDiv" onSubmit={this.handleSubmit}>
                <input type="text" name="movie" value={this.state.value} onChange={this.handleChange} placeholder="Enter your movie"></input>
                <button type="submit">SEARCH</button>
                <h4>SEARCH BY</h4>
                <div class="radioButtons">
                    <div class="radioButtonName">
                        <input type="radio" name="option" id="radio_name" checked />
                        <label for="radio_name">name</label>
                    </div>
                    <div class="radioButtonDirector">
                        <input type="radio" name="option" id="radio_director" />
                        <label for="radio_director">director</label>
                    </div>
                </div>
            </form>
        </header>
    }
}
