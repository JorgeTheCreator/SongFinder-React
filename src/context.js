import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    track_list: [],
    heading: 'Top 10 Tracks'
  };

  componentDidMount() {
    axios
      .get()
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Context.Proovider value={this.state}>
        {this.props.children}
      </Context.Proovider>
    );
  }
}

export const Consumer = Context.Consumer;
