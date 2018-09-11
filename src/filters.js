// MyBarChart.js
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
class Tab extends React.Component {
 render() {
        
        return (
            <div className="btn-group text-right" id="navDesc" role="group" aria-label="">
                <div className="pos-relative">
                   <button type="button" className={this.state.btn_nav==8 ? "btn btn-sm btn-default btn-tab active" : "btn btn-sm btn-default btn-tab"}  onClick={() => this.handleSort(8)} >Weekly</button>
                   <button type="button"  className={this.state.btn_nav==7 ? "btn btn-sm btn-default btn-tab active" : "btn btn-sm btn-default btn-tab"}  onClick={() => this.handleSort(7)} >Monthly</button>
                    <button type="button" className={this.state.btn_nav==9 ? "btn btn-sm btn-default btn-tab active" : "btn btn-sm btn-default btn-tab"}  onClick={() => this.handleSort(9)} >Quarterly</button>
                </div>
           </div>
        );
    }
}
export default Tab;