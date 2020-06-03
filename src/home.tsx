import React, {Component} from 'react';

import css from './home.css';

export class Home extends Component {
  state = {
    count: 0,
  };

  interval?: NodeJS.Timeout;

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval!);
  }

  render() {
    return <div className={css.texto}>Counter {this.state.count}</div>;
  }
}
