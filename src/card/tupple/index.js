import React, { Component } from 'react';
import './tupple.css';

class Tupple extends Component {

  render() {
  const { title } = this.props;

    return (
      <div className="col-md-3">
        <div className={this.props.className}>
         {this.renderTitle(title)}
         {this.props.children}
        </div>
      </div>
    );
    
  }
  renderTitle(title) {
        if (title){
            return <p>{title} {this.props.percentage}</p>;
        }
    }

  
}

export default Tupple;
