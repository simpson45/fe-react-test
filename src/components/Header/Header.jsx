import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './header.css';


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push(`/search/${this.state.value}`);
  };

  render() {
    return (
      <header className={style.header}>
        <div className={style.divLogo}>
          <p className={style.logo}>netflixroulette</p>
        </div>
        <h3 className={style.h3}>FIND YOUR MOVIE</h3>
        <form className={style.searchDiv} onSubmit={this.handleSubmit}>
          <input
            className={style.input}
            type="text"
            name="movie"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Enter your movie"
          />
          <button className={style.searchButton} type="submit">SEARCH</button>
        </form>
      </header>
    );
  }
}


Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
