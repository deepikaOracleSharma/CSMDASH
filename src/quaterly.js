// MyBarChart.js
import React from 'react';
import axios from 'axios';
import MyBarChart from "./barChart";
let quaterlist=[];
class Quaterly extends React.Component {
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
                quaterlist=[];
                for(var i=0;i<myObj.quater.data.length;i++){
                    var LobVal=  myObj.quater.data[i].value/1000000;
                    //alert(myObj.quater.data[i].name);
                    quaterlist.push({
                       name:myObj.quater.data[i].name,
                       Consumption:parseFloat((LobVal).toFixed(2)),
                       Target:0
                    })

                    
                }
                console.log(JSON.stringify(quaterlist));
                this.setState({
                    componentData: quaterlist
                })
              
          
            })
    }
  
    render() {
        let Montholydata =quaterlist;
          console.log(JSON.stringify(Montholydata));
        return (
            <div>
                <p class="alert info">All values are in <strong>USD Mn</strong></p>
                <MyBarChart data={Montholydata}/>
            </div>
        );
    }
}
export default Quaterly;