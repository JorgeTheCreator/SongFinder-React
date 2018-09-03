import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    track_list: [
      { track: { track_name: 'abc' } },
      { track: { track_name: '123' } },
      { track: { track_name: '456' } }
    ],
    heading: 'Top 10 Tracks'
  };

  componentDidMount() {}

  render() {
    return (
      <Context.Proovider value={this.state}>
        {this.props.children}
      </Context.Proovider>
    );
  }
}

export const Consumer = Context.Consumer;
