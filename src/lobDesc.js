import React, { Component } from 'react';
import ProgressBar from './rangeSlider';
import axios from 'axios';
class ProductDesc extends React.Component {
  constructor() {
    super();
    this.state = {
        
        componentData:''
        
    };
  }
  componentDidMount() {

    axios.get('http://solutionengineering-devops.us.oracle.com:8090/usage/kpi')


    .then(res => {
      var myObj = res.data.lob;
      var  x = '<li><span> Products</span> <strong>Usage</strong></li>';
      var elements=[];
        for(var i=0;i<myObj.length;i++){
             // push the component to elements! <Card value={ arr[i] } />
             var actual='$'+((myObj[i].actual)/1000000).toFixed(2)+' M';
            
             var maxVal='$'+myObj[i].target/1000000+' M';
             var percentage=parseInt((myObj[i].actual/myObj[i].target)*100);
            
              elements.push(<span class="bold">{myObj[i].name}</span>);
              elements.push(<span class="">({((myObj[i].actual/myObj[i].target)*100).toFixed(2)}%)</span>);
             // elements.push(' ('+parseInt((myObj[i].actual/myObj[i].target)*100)+"%)"); 
              elements.push(<ProgressBar minPercentage='10%' minval="0" width={percentage} val={actual} Maxval={maxVal} maxPercentage='100%' label="40%" classMin="minProgress" classMax="maxProgress" />);
              elements.push(<br/>)

        }
      this.setState({
          componentData: elements
      })
  })
        
}

    render() {
      console.log(this.state.componentData);
      return (
        <ul >
           {this.state.componentData}  
        </ul>
      );
    }
  }
  
  export default ProductDesc;
  

  