import React, { Component } from 'react';
import styles from './styles.less';

class ImageComponent extends Component {
  render() {
    return (
      <img src={this.props.imageSrc} className={styles.galleryImage} />
    );
  }
}

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    
    this.state = { images: [] }
    
    this.componentDidMount = () => this.getImages();
    this.componentWillUnmount = () => this.serverRequest.abort();
  }
  
  getImages() {
    this.serverRequest = $.get(this.props.source, function (result) {
      this.setState({
        images: result.images
      });
    }.bind(this));
  }
  
  render() {
    return (
      <div className={styles.gallery}>
        {this.state.images.map(function(item, i) {
          return (
            <ImageComponent key={i} imageSrc={item} />
          )
        })}
      </div>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <ImageGallery source="http://localhost:5000/images" />
    );
  }
}