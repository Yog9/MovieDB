import React, { Component } from "react";
import axios from "axios";
import Form from "./Form";
import Container from "./Container";
import "./index.css";

import Navbar from "./Navbar";
class App extends Component {
  state = {
    movies: [],
    loading: true
  };

//http://www.omdbapi.com/?s=${query}&apikey=${apiKey}&type=movie

  getMovie = query => {
    axios
    
      .get(`https://api.themoviedb.org/3/search/movie?api_key=2afba9f9458a7c12ebe9718f62d54bf5&query=${query}&include_adult=false`)
      .then(response => {
        // handle success
        this.setState({
          movies: response.data.results,
          loading: false
        });
        console.log("state is", this.state.movies);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };
  componentDidMount() {
    this.getMovie("home");
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Form getMovie={this.getMovie} />
          {this.state.loading ? (
            <div className="loader">Loading</div>
          ) : (
            <Container movies={this.state.movies} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
