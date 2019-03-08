import React from "react";

function Movie(props) {
  const cardStyle = {
    width: "18rem"
  };
  console.log("Poster of movie componet", props.movie_item.poster_path);
  console.log("Title of movie componet", props.movie_item.title);
  return (
    <div className="col col-lg-4">
      <div className="card text-center mb-4" style={cardStyle}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.movie_item.poster_path}`}
          className="card-img-top"
          alt="movie_image"
        />
        <div className="card-body">
          <h5 className="card-title text-center">{props.movie_item.title}</h5>

          <a href="#" className="btn btn-primary mx-auto">
            Details
          </a>
        </div>
      </div>
    </div>
  );
}

export default Movie;
