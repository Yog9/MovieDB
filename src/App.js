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

  getMovie = query => {
    axios
      .get(`http://www.omdbapi.com/?s=${query}&apikey=87dc56b2&type=movie`)
      .then(response => {
        // handle success
        this.setState({
          movies: response.data.Search,
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
