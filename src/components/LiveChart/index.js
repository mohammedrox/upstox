import React from 'react';

import Header from './../Header';
import LiveCharts from './../../containers/liveCharts'

class LiveChart extends React.Component{
  render () {
    return(
      <div className="page-wrapper">
        <Header {...this.props} />
        <div className="content-wrapper">
          <div className="container">
            <h1>Live Chart</h1>
            <LiveCharts />
          </div>
        </div>
      </div>
    )
  }
}

export default LiveChart;
