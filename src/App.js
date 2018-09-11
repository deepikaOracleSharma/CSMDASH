import React, { Component } from 'react';
import './App.css';
import Card from './card';
import Sidebar from './sidebar';
//import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import ProgressBar from './rangeSlider';
import Tupple from './card/tupple/index';
import Route from "./route";
import HorizontalChart from "./horizontalGraph2";
import ProductDesc from "./hbarChart";
import LobDesc from "./lobDesc";
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
        selectedFirstCon: '',
        total: '',
        percentage: '',
        selectedFirstCon1: '',
        componetotalntData1: '',
        percentage1: '',
        selectedFirstCon2: '',
        componetotalntData2: '',
        percentage2: '',
        selectedFirstCon0: '',
        componetotalntData0: '',
        percentage0: '',
        componentData:''
        
    };
  }
    componentDidMount() {

      axios.get('http://solutionengineering-devops.us.oracle.com:8090/usage/overall')
          .then(res => {
              var myObj = res.data;
              console.log('testing'+JSON.stringify(myObj.FYOverallCloudConsumption.usage));
              this.setState({ selectedFirstCon: '$'+myObj.FYOverallCloudConsumption.usage.actual, total:'$'+myObj.FYOverallCloudConsumption.usage.total, percentage:myObj.FYOverallCloudConsumption.usage.percentage+'%'});
              var j, x = '';
              for (j=0 ;j<=myObj.contractTypeOverallUsage.data.length-1;j++) {
                var SelectedFirstCon='selectedFirstCon'+j;
                var componetotalntData='componetotalntData'+j;
                var percentage='percentage'+j;
                
                this.setState({selectedFirstCon0: '$'+myObj.contractTypeOverallUsage.data[0].usage.actual, total0:'$'+myObj.contractTypeOverallUsage.data[0].usage.total,CtcTitle0:myObj.contractTypeOverallUsage.data[0].type, percentage0:myObj.contractTypeOverallUsage.data[0].usage.percetage+'%',
                  selectedFirstCon1: '$'+myObj.contractTypeOverallUsage.data[1].usage.actual, total1:'$'+myObj.contractTypeOverallUsage.data[1].usage.total,CtcTitle1:myObj.contractTypeOverallUsage.data[1].type, percentage1:myObj.contractTypeOverallUsage.data[1].usage.percetage+'%',
                  selectedFirstCon2: '$'+myObj.contractTypeOverallUsage.data[2].usage.actual, total2:'$'+myObj.contractTypeOverallUsage.data[2].usage.total,CtcTitle2:myObj.contractTypeOverallUsage.data[2].type, percentage2:myObj.contractTypeOverallUsage.data[2].usage.percetage+'%',
                  selectedFirstCon3: '$'+myObj.contractTypeOverallUsage.data[3].usage.actual, total3:'$'+myObj.contractTypeOverallUsage.data[3].usage.total, CtcTitle3:myObj.contractTypeOverallUsage.data[3].type,percentage3:myObj.contractTypeOverallUsage.data[3].usage.percetage+'%'
                });
             

              }
              this.setState({
                  componentData: x
              })
            
           //   x += '<ProgressBar minPercentage="0" minval="0" width="" val={this.state.selectedFirstCon} Maxval={this.state.total} maxPercentage="100%" label={this.state.percentage} classMin="minProgress" classMax="maxProgress" />';
               
              // this.setState({
              //     componentData: x
              // })
          })
  }


  render() {
   
    

   
    return (
      <div className="main">
        <Sidebar />
        <h6 class="title6">Cloud Consumption Dashboard</h6><label className="updatedate">Updated Date: 04/Sep/2018</label>
        <Card title= "FY19 Overall Usage" percentage= {this.state.percentage}>
          
        <ProgressBar minPercentage={this.state.percentage} minval="0" width={this.state.percentage} val={this.state.selectedFirstCon} Maxval={this.state.total} maxPercentage='100%' label="40%" classMin="minProgress" classMax="maxProgress" />
                              
        </Card>
        <div className="m15"></div>
        <Card title= "Contract Type Overall Usage">
          <div className="row tuppl">
            <Tupple title={this.state.CtcTitle0} className="tupple firstCont" percentage={this.state.percentage0} >
            <ProgressBar minPercentage={this.state.percentage0} minval="0" width={this.state.percentage0} val={this.state.selectedFirstCon0} Maxval={this.state.total0} maxPercentage='100%' label="40%" classMin="minProgress" classMax="maxProgress" />
                      
            </Tupple>

            <Tupple title={this.state.CtcTitle1} className=" tupple secCont" percentage={this.state.percentage1}>
            <ProgressBar minPercentage={this.state.percentage1} minval="0" width={this.state.percentage1} val={this.state.selectedFirstCon1} Maxval={this.state.total1} maxPercentage='100%' label="40%" classMin="minProgress" classMax="maxProgress" />
                      
            </Tupple>

            <Tupple title={this.state.CtcTitle2} className="tupple thirdCont" percentage={this.state.percentage2}>
            <ProgressBar minPercentage={this.state.percentage2} minval="0" width={this.state.percentage2} val={this.state.selectedFirstCon2} Maxval={this.state.total2} maxPercentage='100%' label="40%" classMin="minProgress" classMax="maxProgress" />
                      </Tupple>

            <Tupple title={this.state.CtcTitle3} className="tupple fourthCont" percentage={this.state.percentage3}>
            <ProgressBar minPercentage={this.state.percentage3} minval="0" width={this.state.percentage3} val={this.state.selectedFirstCon3} Maxval={this.state.total3} maxPercentage='100%' label="40%" classMin="minProgress" classMax="maxProgress" />
                                  
        </Tupple>
          </div>
        </Card>
        <div className="m15 TbdGraph">
          <Route/>
        </div>
        <br/>
        <div class="LobUsage">
        <h3>LOB Usage</h3>
          <div class="LobCover">
          <div className="productUsage">
              <LobDesc/>
            </div>
            {/* <HorizontalChart/>*/}
              <div className="productUsage">
              <ProductDesc/>
            </div>
          </div>
        </div>
        <div class="footer">
        <img src="https://stbeehive.oracle.com/content/dav/st/anganspace/Public%20Documents/hublogo.png"/>
        <p>Powered by Digital Tools &amp; Agency – Bangalore Hub</p>
      </div>
   </div>
    );
  }
}

export default App;
