import React, { Component } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend}  from 'recharts';;
// const data = [
//       {name: 'Page A', uv: 4000, LOB: 2400, amt: 2400},
//       {name: 'Page B', uv: 3000, LOB: 1398, amt: 2210},
//       {name: 'Page C', uv: 2000, LOB: 9800, amt: 2290},
//       {name: 'Page D', uv: 2780, LOB: 3908, amt: 2000},
//       {name: 'Page E', uv: 1890, LOB: 4800, amt: 2181},
//       {name: 'Page F', uv: 2390, LOB: 3800, amt: 2500},
//       {name: 'Page G', uv: 3490, LOB: 4300, amt: 2100},
// ];
class HorizontalChart extends Component {
    constructor() {
        super();
        this.state = {
            
            componentData:''
            
        };
      }
      componentDidMount() {

        // axios.get('http://solutionengineering-devops.us.oracle.com:8090/usage/kpi')
        //     .then(res => {
        //         var myObj = res.data;
        //         var Lob=myObj.lob;
        //         var product=myObj.products;
        //         var loblist=[];
        //         for(var i=0;i<Lob.length;i++){
        //             loblist.push({
        //                 Name:'Page'+i,
        //                 LOB:parseInt(Lob[i].actual),
        //                 Target:parseInt(Lob[i].target),
        //             })
        //         }
        //         console.log(JSON.stringify(loblist));
        //         this.setState({
        //             componentData: loblist
        //         })
              
          
        //     })
    }
  render() {
    // const data=this.state.componentData;
     // console.log(JSON.stringify(data));
    return (
        <BarChart width={800} height={300} data={this.props.data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="name"/>
       <YAxis/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="Consumption" fill="#48cfad" />
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