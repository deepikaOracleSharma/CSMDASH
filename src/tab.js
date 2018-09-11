// MyBarChart.js
import React from 'react';
import { Link } from "react-router-dom";

class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = { the_message:1,btn_nav:7};
      }
      
    //   handleSort = (value) => {
    //     this.setState({ the_message: value, btn_nav:value });
    //    alert(value);

    //   }
   
    render() {
        var valSelected=window.location.href;
        var filterTarget=valSelected.split("/");
        var filerTargertnew=filterTarget[filterTarget.length-1];
// alert(filerTargertnew);
      //  alert(this.state.filter);
       //alert(this.state.btn_nav);
        return (
            <div className="btn-group text-right" id="navDesc" role="group" aria-label="">
                <div className="pos-relative">
                <Link to="/weekly"> <button type="button" className={filerTargertnew=="weekly" ? "btn btn-sm btn-default btn-tab active" : "btn btn-sm btn-default btn-tab "}  >Weekly</button></Link>
                <Link to="/"><button type="button"  className={filerTargertnew=="" ? "btn btn-sm btn-default btn-tab active" : "btn btn-sm btn-default btn-tab "} >Monthly</button></Link>
                <Link to="/quaterly">   <button type="button" className={filerTargertnew=="quaterly" ? "btn btn-sm btn-default btn-tab btn-last active" : "btn btn-sm btn-default btn-tab btn-last"}   >Quarterly</button></Link>
                </div>
           </div>
        );
    }
}
export default Tab;