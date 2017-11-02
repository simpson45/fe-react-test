import React, { Component, PropTypes } from 'react'
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import MovieInfoPage from "./MovieInfoPage"
import MoviesSearchPage from "./MoviesSearchPage"
import Footer from "../components/Footer"


export default  class App extends Component {
    render() {
       return <div>
           <Switch>
               <Route exact path='/' component={MoviesSearchPage}/>
               <Route exact path='/search/:string' component={MoviesSearchPage}/>
               <Route exact path='/film/:string' component={MovieInfoPage}/>
           </Switch>
           <Footer/>
       </div>
    }
}
