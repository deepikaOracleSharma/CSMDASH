// MyBarChart.js
import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Tab from "./tab";
import OverView from "./overview";

import Card from './card';
import Weeklydata from './weekly';
import Montholy from './montholy';
import Quaterly from './quaterly';

//alert(window.location.href);
// var valSelected=window.location.href;
// var filterTarget=valSelected.split("/");
// var filerTargertnew=filterTarget[filterTarget.length-1];

const RouteData = () => (
  
  
  <Router>
    <div>
        
        <OverView/>
        <Card>
          <h5 className="inline" id="overviewDesc">FY19 Cloud Consumption Overview</h5>
          <Route exact path="/" component={Monthly} />
          <Route path="/weekly" component={Weekly} />
          <Route path="/quaterly" component={quaterly} />
          <Route path="/overview" component={overview} />
          <Route path="/lob" component={Lob} />
          <Route path="/contractype" component={Contractype} />
          <Route path="/product" component={Product} />
          <Route path="/autonomous" component={Autonomous} />
      </Card>
    </div>
    
  </Router>
);

const Monthly = () => (
  <div>
  <Tab />
  <Montholy/>
  </div>
    
);

const Weekly = () => (
  <div>
  <Tab />
    <Weeklydata/>
    </div>
   
);

const quaterly = ({ match }) => (
  <div>
  <Tab />
  <Quaterly/>
    </div>
  
);
const overview = ({ match }) => (
  <div>
  <Tab/>
  <Montholy/>
    </div>
  );
const Contractype = ({ match }) => (
<div className="QuaterTarget">
    <p className="comingSoon"><img src="https://www.camptramontina.com/wp-content/uploads/2016/03/comingSoonSmall.gif"/>.</p>
</div>
);
const Lob = ({ match }) => (
<div className="QuaterTarget">
  <p className="comingSoon"><img src="https://www.camptramontina.com/wp-content/uploads/2016/03/comingSoonSmall.gif"/>.</p>
</div>
);
const Product = ({ match }) => (
<div className="QuaterTarget">
  <p className="comingSoon"><img src="https://www.camptramontina.com/wp-content/uploads/2016/03/comingSoonSmall.gif"/>.</p>
</div>
);
const Autonomous = ({ match }) => (
<div className="QuaterTarget">
  <p className="comingSoon"><img src="https://www.camptramontina.com/wp-content/uploads/2016/03/comingSoonSmall.gif"/>.</p>
</div>
);



export default RouteData;