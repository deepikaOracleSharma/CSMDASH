// MyBarChart.js
import React from 'react';
import { Link } from "react-router-dom";
import Nav from "./nav";
class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = { the_message:1,btn_nav:7};
      }
      handleSort = (value) => {
        this.setState({ the_message: value, btn_nav:value });

      }
      
     
   
    render() {
        // alert(this.state.the_message);
        if (this.state.the_message != 1) {
            setTimeout(function(){ 
            document.getElementById('overviewDesc').classList.add("hide");
            document.getElementById('navDesc').classList.add("hide");
             }, 5000);
         }
       // else if(this.state.the_message==1){
           
        //     setTimeout(function(){ 
        //         this.state = { the_message:1,btn_nav:7};
        //          document.getElementById('overviewDesc').classList.remove("hide");
        //     document.getElementById('navDesc').classList.remove("hide"); }, 5000);

        //   //  document.getElementById('navDesc').classList.remove("hide");
        //    // document.getElementById('pos-relative').classList.remove("hide");
        //   //  document.getElementById('overviewDesc').classList.remove("hide");
        //   //  document.getElementById('navDesc').classList.remove("hide");
        // }
       
        return (
            <Nav>
                <li onClick={() => this.handleSort(1)}  className={this.state.the_message==1 ? "active" : ""} ><Link to="/overview"  >Overview</Link></li>
                <li title="disabled">Contract Type</li>
                <li title="disabled">LOB</li>
                <li title="disabled">Product</li>
                <li title="disabled">Autonomous</li>
            </Nav>
        );
    }
}
export default Tab;