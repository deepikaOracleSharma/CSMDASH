import React, { Component } from 'react';
import axios from 'axios';
class ProductDesc extends React.Component {
  constructor() {
    super();
    this.state = {
        
        componentData:''
        
    };
  }
  componentDidMount() {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    })
    axios.get('http://solutionengineering-devops.us.oracle.com:8090/usage/kpi')


    .then(res => {
      var myObj = res.data.products;
      var  x = '<li><span> Products</span> <strong>Usage</strong></li>';
      for (var j=0;j<myObj.length;j++) {

            var actualVal=myObj[j].actual;
            var actualVal1=formatter.format(parseInt((actualVal)));
            var filterVal=actualVal1.split(".");
            //console.log(actualVal1);
           // console.log(filterVal[0]);
          x += '<li><span>'+myObj[j].name+'</span> <strong>'+filterVal[0]+'</strong></li>';


      }
      this.setState({
          componentData: x
      })
  })
        
}

    render() {
      return (
        <ul dangerouslySetInnerHTML={ { __html:  this.state.componentData } }>
             
        </ul>
      );
    }
  }
  
  export default ProductDesc;
  

  