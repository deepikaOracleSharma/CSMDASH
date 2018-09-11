import React, { Component } from 'react';
import './sidebar.css';

class Sidebar extends Component {
  render() {
    return (
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li>
                    <a>Dashboard</a>
                </li>
                
            </ul>
    </div>
    );
  }
}

export default Sidebar;
