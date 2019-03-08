import React from "react";
import Movie from "./Movie";
import NotFound from "./NotFound";

function Container(props) {
  let return_movie_item;
  console.log("container prop", props.movies);
  props.movies === undefined
    ? (return_movie_item = <NotFound />)
    : (return_movie_item = props.movies.map(movie => (
        <Movie movie_item={movie} key={movie.id} />
      )));

  return (
    <div className="container">
      <div className="row">{return_movie_item}</div>
    </div>
  );
}

export default Container;
