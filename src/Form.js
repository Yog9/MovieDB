import React, { Component } from "react";

class Form extends Component {
  handleSubmit = e => {
    e.preventDefault();

    //alert("A name was submitted: " + this.input.value);
    this.props.getMovie(this.input.value);
    this.input.value = "";
  };
  render() {
    return (
      <React.Fragment>
        <div className="jumbotron jumbotron-fluid container-fluid mt-5 bg-dark">
          <div className="container-fluid">
            <h3 className="text-center text-white font-weight-light">
              Search For any Movie
            </h3>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="exampleCheck1"
                placeholder="Search Movie...."
                ref={input => (this.input = input)}
              />
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default Form;
