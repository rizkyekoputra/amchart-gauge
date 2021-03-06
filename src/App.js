import React, { Component } from 'react';
import AmCharts from "@amcharts/amcharts3-react";
import './App.css';


// Component which contains the dynamic state for the chart
class App extends Component {
  render() {
    const config = {
      "type": "gauge",
  "theme": "light",
  "axes": [{
    "axisAlpha": 0,
    "tickAlpha": 0,
    "labelsEnabled": false,
    "startValue": 0,
    "endValue": 100,
    "startAngle": 0,
    "endAngle": 360,
    "bands": [{
      "color": "#eee",
      "startValue": 0,
      "endValue": 100,
      "radius": "100%",
      "innerRadius": "85%"
    }, {
      "color": "#84b761",
      "startValue": 0,
      "endValue": 80,
      "radius": "100%",
      "innerRadius": "85%",
      "balloonText": "90"
    }, {
      "color": "#eee",
      "startValue": 0,
      "endValue": 100,
      "radius": "80%",
      "innerRadius": "65%"
    }, {
      "color": "#fdd400",
      "startValue": 0,
      "endValue": 35,
      "radius": "80%",
      "innerRadius": "65%",
      "balloonText": "35%"
    }, {
      "color": "#eee",
      "startValue": 0,
      "endValue": 100,
      "radius": "60%",
      "innerRadius": "45%"
    }, {
      "color": "#cc4748",
      "startValue": 0,
      "endValue": 92,
      "radius": "60%",
      "innerRadius": "45%",
      "balloonText": "92%"
    }, {
      "color": "#eee",
      "startValue": 0,
      "endValue": 100,
      "radius": "40%",
      "innerRadius": "25%"
    }, {
      "color": "#67b7dc",
      "startValue": 0,
      "endValue": 68,
      "radius": "40%",
      "innerRadius": "25%",
      "balloonText": "68%"
    }, {
      "color": "#686868",
      "startValue": 0,
      "endValue": 100,
      "radius": "20%",
      "innerRadius": "0%",
    }]
  }],
  "allLabels": [{
    "text": "1",
    "x": "48.2%",
    "y": "43%",
    "size": 55,
    "bold": true,
    "color": "#ffffff",
    "align": "centerX"
  }]
  // "allLabels": [{
  //   "text": "First option",
  //   "x": "49%",
  //   "y": "5%",
  //   "size": 15,
  //   "bold": true,
  //   "color": "#84b761",
  //   "align": "right"
  // }, {
  //   "text": "Second option",
  //   "x": "49%",
  //   "y": "15%",
  //   "size": 15,
  //   "bold": true,
  //   "color": "#fdd400",
  //   "align": "right"
  // }, {
  //   "text": "Third option",
  //   "x": "49%",
  //   "y": "24%",
  //   "size": 15,
  //   "bold": true,
  //   "color": "#cc4748",
  //   "align": "right"
  // }, {
  //   "text": "Fourth option",
  //   "x": "49%",
  //   "y": "33%",
  //   "size": 15,
  //   "bold": true,
  //   "color": "#67b7dc",
  //   "align": "right"
  // }]
    };

    return (
      <div className="App">
        <AmCharts.React style={{ width: "100%", height: "500px" }} options={config} />
      </div>
    );
  }
}

export default App;
