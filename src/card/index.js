import React, { Component } from 'react';
import './index.css';

class Card extends Component {

  render() {
  const { title } = this.props;

    return (
      <div className="card">
         {this.renderTitle(title)}
         {this.props.children}
      </div>
    );
    
  }
  renderTitle(title) {
        if (title){
            return <h3>{title}&nbsp;{this.props.percentage}</h3>;
        }
    }
}

export default Card;
