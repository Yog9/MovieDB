import React, { Component } from "react";
import Movie from "./Movie";
import NotFound from "./NotFound";

const Container = props => {
  let return_movie_item;

  console.log("container prop", props.movies);
  console.log("container prop length", props.movies.length);
  props.movies.length === 0
    ? (return_movie_item = <NotFound />)
    : (return_movie_item = props.movies.map(movie => (
        <Movie movie_item={movie} key={movie.id} />
      )));
  return (
    <div className="container">
      <div className="row">{return_movie_item}</div>
    </div>
  );
};

export default Container;
