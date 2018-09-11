// MyBarChart.js
import React from 'react';
import axios from 'axios';
import MyBarChart from "./barChart";
let weeklist=[];
class Weekly extends React.Component {
    constructor() {
        super();
        this.state = {
            
            componentData:''
            
        };
      }
      componentDidMount() {

        axios.get('http://solutionengineering-devops.us.oracle.com:8090/usage/periodic')
            .then(res => {
                var myObj = res.data;
               // alert("test"+JSON.stringify(myObj.week.data));
                // var Lob=myObj.lob;
                // var product=myObj.products;
                weeklist=[];
                for(var i=0;i<myObj.week.data.length;i++){
                    var LobVal=  myObj.week.data[i].value/1000000; 
                    weeklist.push({
                        name: 'Week '+myObj.week.data[i].name,
                        Consumption:parseFloat((LobVal).toFixed(2)),
                        Target:0,
                    })

                    
                }
                console.log(JSON.stringify(weeklist));
                this.setState({
                    componentData: weeklist
                })
              
          
            })
    }
  
    render() {
        let weeklistdata =weeklist;
          console.log(JSON.stringify(weeklistdata));
        return (
            <div>
                
                <p class="alert  info">All values are in <strong>USD Mn</strong></p>
                <MyBarChart data={weeklistdata}/>
            </div>
        );
    }
}
export default Weekly;