import React from "react";
import noimage from "./no-image.jpg";

function Movie(props) {
  const cardStyle = {
    width: "18rem"
  };
  let img;
  if (props.movie_item.poster_path == null) img = noimage;
  else img = `https://image.tmdb.org/t/p/w500/${props.movie_item.poster_path}`;
  console.log("props of movie componet", props.movie_item);
  console.log("Poster of movie componet", props.movie_item.poster_path);
  console.log("Title of movie componet", props.movie_item.title);
  return (
    <div className="col col-lg-4">
      <div className="card text-center mb-4" style={cardStyle}>
        <img src={img} className="card-img-top" alt="movie_image" />
        <div className="card-body">
          <h5 className="card-title text-center">
            {props.movie_item.title.length < 14
              ? `${props.movie_item.title}`
              : `${props.movie_item.title.substring(0, 15)}...`}
          </h5>

          <a href="#" className="btn btn-primary mx-auto">
            Details
          </a>
        </div>
      </div>
    </div>
  );
}

export default Movie;
