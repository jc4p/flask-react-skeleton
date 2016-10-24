import React, { Component } from 'react';
import styles from './styles.scss';

class YourComponent extends Component {
  constructor(props) {
    super(props);
    
    this.componentDidMount = () => {};
    this.componentWillUnmount = () => {};
  }
  
  render() {
    return (
      <div className={styles.mainContainer}>
        Put your components here!
      </div>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <YourComponent />
    );
  }
}