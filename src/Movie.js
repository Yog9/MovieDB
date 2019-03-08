import React from "react";

function Movie(props) {
  const cardStyle = {
    width: "18rem"
  };
  console.log("Poster of movie componet", props.movie_item.Poster);
  console.log("Title of movie componet", props.movie_item.Title);
  return (
    <div className="col col-lg-4">
      <div className="card text-center mb-4" style={cardStyle}>
        <img
          src={props.movie_item.Poster}
          className="card-img-top"
          alt="movie_image"
        />
        <div className="card-body">
          <h5 className="card-title text-center">{props.movie_item.Title}</h5>

          <a href="#" className="btn btn-primary mx-auto">
            Details
          </a>
        </div>
      </div>
    </div>
  );
}

export default Movie;
