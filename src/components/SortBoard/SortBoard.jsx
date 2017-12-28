import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './SortBoard.css';


export default class SortBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortByDate: true,
      sortByRating: true,
    };
  }

  sortByDate = () => {
    const { sortMovies } = this.props;
    this.setState({
      sortByDate: false,
      sortByRating: true,
    });
    sortMovies('date');
  };

  sortByRating = () => {
    const { sortMovies } = this.props;
    this.setState({
      sortByDate: true,
      sortByRating: false,
    });
    sortMovies('rating');
  };

  render() {
    return (
      <nav className={style.sortBoard}>
        <p className={style.moviesFoundText}> {this.props.numberOfMovies} movies found </p>
        <p className={style.sortByText}> Sort by </p>
        <button
          className={!this.state.sortByDate ? style.buttonSortActive : style.buttonSortBy}
          onClick={this.sortByDate}
          disable={!this.state.sortByDate}
        >
          realease date
        </button>
        <button
          className={!this.state.sortByRating ? style.buttonSortActive : style.buttonSortBy}
          onClick={this.sortByRating}
          disable={!this.state.sortByRating}
        >
          rating
        </button>
      </nav>
    );
  }
}

SortBoard.propTypes = {
  numberOfMovies: PropTypes.number.isRequired,
  sortMovies: PropTypes.func.isRequired,
};
