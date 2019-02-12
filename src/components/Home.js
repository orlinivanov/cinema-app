import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      movies: []
    };
    // this.state = stateFromChildren(this.props.children);
    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    // props.getMovieList();
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h4>Movies:</h4>
        {this.state.movies.map((movie, i) => (
          <div key={i}>{movie.title}</div>
        ))}
      </div>
    );
  }
}