// MyBarChart.js
import React from 'react';
import axios from 'axios';
import MyBarChart from "./barChart";
let monthlist=[];
class Montholy extends React.Component {
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
               // alert("test"+JSON.stringify(myObj.month.data));
                // var Lob=myObj.lob;
                // var product=myObj.products;
                monthlist=[];
                for(var i=0;i<myObj.month.data.length;i++){
                  var LobVal=  myObj.month.data[i].value/1000000;
                 // alert(parseFloat((LobVal).toFixed(2)));
                    monthlist.push({
                       name:myObj.month.data[i].name,
                       Consumption:parseFloat((LobVal).toFixed(2)),
                       Target:0
                    })

                    
                }
                console.log(JSON.stringify(monthlist));
                this.setState({
                    componentData: monthlist
                })
              
          
            })
    }
  
    render() {
        let Montholydata =monthlist;
          console.log(JSON.stringify(Montholydata));
        return (
            <div>
                
                <p class="alert  info">All values are in <strong>USD Mn</strong></p>
                <MyBarChart data={Montholydata}/>
            </div>
        );
    }
}
export default Montholy;