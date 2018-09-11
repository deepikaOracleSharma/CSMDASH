import React, { Component } from 'react';
import {ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import axios from 'axios';



class VerticalChart extends Component {
    constructor() {
        super();
        this.state = {
            
            componentData:''
            
        };axios.get('http://solutionengineering-devops.us.oracle.com:8090/usage/kpi')
            .then(res => {
                var myObj = res.data;
                var Lob=myObj.lob;
                var product=myObj.products;
                var loblist=[];
                for(var i=0;i<Lob.length;i++){
                    loblist.push({
                        name:Lob[i].name,
                        LOB:parseInt(Lob[i].actual),
                        Target:parseInt(Lob[i].target),
                        amt: 1400
                    })
                }
                console.log(JSON.stringify(loblist));
                this.setState({
                    componentData: loblist
                })
              
          
            })
      }
      componentDidMount() {

        
    }
  render() {
      const data=this.state.componentData;
      console.log(JSON.stringify(data));
    return (
     <ComposedChart layout="vertical" width={600} height={400} data={data}
            margin={{top: 20, right: 20, bottom: 20, left: 20}}>
          <CartesianGrid stroke='#f5f5f5'/>
          <XAxis type="number"/>
          <YAxis dataKey="name" type="category"/>
          <Tooltip/>
          <Legend/>
          <Area dataKey='amt' fill='#8884d8' stroke='#8884d8'/>
          <Bar dataKey='pv' barSize={5} fill='#413ea0'/>
          <Line dataKey='uv' stroke='#ff7300'/>
       </ComposedChart>
    );
  }
}
export default VerticalChart;