// MyBarChart.js
import React from 'react';

class Nav extends React.Component {

   
    render() {
        return (
            <ul class="nav nav-tabs">
                {this.props.children}
            </ul>
        );
    }
}
export default Nav;