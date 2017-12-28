import React from 'react';
import Switch from 'react-router-dom/es/Switch';
import Route from 'react-router-dom/es/Route';
import MovieDetailPage from './MovieDetail';
import MoviesSearchPage from './MoviesSearch';
import Footer from '../components/Footer/Footer';


const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={MoviesSearchPage} />
      <Route exact path="/search/:string" component={MoviesSearchPage} />
      <Route exact path="/film/:string" component={MovieDetailPage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
