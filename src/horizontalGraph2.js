import React, { Component } from 'react';
import {ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import axios from 'axios';
class VerticalChart extends Component {
    constructor() {
        super();
        this.state = {
            
            componentData:''
            
        };
      }
      componentDidMount() {
        axios.get('http://solutionengineering-devops.us.oracle.com:8090/usage/kpi')
        .then(res => {
            var myObj = res.data;
            var Lob=myObj.lob;
            var product=myObj.products;
            var loblist=[];
            for(var i=0;i<Lob.length;i++){
                loblist.push({
                    Name:Lob[i].name,
                    Target:parseInt(Lob[i].target),
                    Actual:parseInt(Lob[i].actual)
                })
            }
            console.log(JSON.stringify(loblist));
            this.setState({
                componentData: loblist
            })
          
      
        })
        
    }
  render() {
      console.log(this.state.componentData)
    const data = this.state.componentData;
    return (
        <ComposedChart layout="vertical" width={500} height={600} data={data}
        margin={{top: 20, right: 40, bottom: 20, left: 20}}>
      <CartesianGrid stroke='#f5f5f5'/>
      <XAxis type="number"/>
      <YAxis dataKey="Name" type="category"/>
      <Tooltip/>
      <Legend/>
    {/*  <Area dataKey='All Values in Million' fill='#8884d8' stroke='#8884d8'/>*/}
      <Bar dataKey='Actual' barSize={20} fill='#413ea0'/>
      <Line dataKey='Target' stroke='#413ea0'/>
   </ComposedChart>
    );
  }
}
export default VerticalChart;