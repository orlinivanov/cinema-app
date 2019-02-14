import React, { Component } from 'react';
import YouTubeContainer from './YouTubeContainer';
import { Redirect } from 'react-router-dom';
import HallLayout from './HallLayout';

class Choose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: []
    };
  }

  componentDidMount() {
    if (this.props.selectedMovie.imdbId) {
      fetch(`${this.props.selectedMovie.imdbId}.json`)
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            rows: data.rows
          });
          console.log(this.state);
        });
    }
  }

  render() {
    console.log(this.props);
    // console.log(state);
    if (!this.props.selectedMovie.imdbId) {
      return <Redirect to='/home' />
    }
    return (
      <main>
        <h2>{this.props.selectedMovie.title}</h2>
        <YouTubeContainer
          trailerYouTubeId={this.props.selectedMovie.trailerYouTubeId}
          title={this.props.selectedMovie.title}
        />
        <p>
          Number of tickets:
          <input type="number" name="tickets" id="tickets" min="1" max="6" placeholder="0" disabled={this.props.tickets}/>
          <button onClick={this.props.selectNumberOfTickets} disabled={this.props.tickets}>Choose Seats</button>
          <button onClick={this.props.choseAnotherMovie}>Cancel</button>
        </p>
        {this.props.tickets > 0 &&
          <HallLayout {...this.props} {...this.state}/>
        }
        
      </main>
    )
  }

};

export default Choose;