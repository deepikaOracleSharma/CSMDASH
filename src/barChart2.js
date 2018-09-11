import React, { Component } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import axios from 'axios';

const data = [
    {Name: 'Page A', LOB: 4000, Target: 2400},
    {Name: 'Page B', LOB: '', Target: 0},
    {name: 'Page C', uv: 2000, pv: 9800},
    {name: 'Page D', uv: 2780, pv: 3908},
    {name: 'Page E', uv: 1890, pv: 4800},
    {name: 'Page F', uv: 2390, pv: 3800},
    {name: 'Page G', uv: 3490, pv: 4300},
];
class HorizontalChart extends Component {
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
                        Name:'Page'+i,
                        LOB:parseInt(Lob[i].actual),
                        Target:parseInt(Lob[i].target),
                    })
                }
                console.log(JSON.stringify(loblist));
                this.setState({
                    componentData: loblist
                })
              
          
            })
    }
  render() {
     const data=this.state.componentData;
     // console.log(JSON.stringify(data));
    return (
        <BarChart width={800} height={300} data={this.props.data}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray="5 5"/>
            <XAxis dataKey="Name"/>
            <YAxis/>
            <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)}/>
            <Legend />
          {/*  <Bar type="monotone" dataKey="All Values are in Million" fill='#FF0000' stroke='#FF0000' />*/}
            <Bar type="monotone" dataKey="LOB" fill="#48cfad" />
            <Bar  type="monotone" dataKey="Target" fill="#ffce54" />
        </BarChart>
    );
  }
}
export default HorizontalChart;

// MyBarChart.js
// import React from 'react';
// import {
//     XYPlot,
//     XAxis, // Shows the values on x axis
//     YAxis, // Shows the values on y axis
//     VerticalBarSeries,
//     LabelSeries
// } from 'react-vis';
// class MyBarChart extends React.Component {

//     test1 = (e) => {
//         console.log("clicked")
//         var rect= document.querySelector(".test1");
//         rect.style.backgroundColor = "red";
//     }
//     render() {
//         const data = this.props.data;
//         const chartWidth = 1100;
//         const chartHeight = 150;
//         const chartDomain = [0, chartHeight];
//         function getEventTarget(e) {
//             e = e || window.event;
//             return e.target || e.srcElement; 
//         }
//         setTimeout(function(){  const wrap= document.querySelector(".test");
//         // console.log('test'+wrap); 
//         // wrap.onclick = function(event) {
//         //     var target = getEventTarget(event).getAttribute("y");
//         //    // console.log(getEventTarget(event));
//         //     var x = document.querySelectorAll("[y='"+target+"']")
//         //     console.log(x[1].innerHTML);




//         //    // alert(target);

//         // };
    
//     }, 3000);
//         return (
//             <div>
//                 <div className="wrapper"></div>
//             <XYPlot 
//                 xType="ordinal" 
//                 width={chartWidth} 
//                 height={chartHeight} 
//                 yDomain={chartDomain}
//             >
//                 <XAxis className="test1" />
//                 <YAxis className="test2" />
//                 <VerticalBarSeries className="test" data={data}/>
//                 <LabelSeries className="test3"
//                     data={data.map(obj => {
//                         return { ...obj, label: obj.y }
//                     })}
//                     labelAnchorX="middle"
//                     labelAnchorY="text-after-edge"
//                 />
//             </XYPlot>
//             </div>
//         );
//     }
// }
// export default MyBarChart;