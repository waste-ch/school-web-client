import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
//import Separateresults from './separateresults';
//var CanvasJS= CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Results extends Component {
	constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
	}
	toggleDataSeries(e) {
		if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else {
			e.dataSeries.visible = true;
		}
		this.chart.render();
  }
    labelFormatter(e) {
      // Define a mapping from numeric values to exam format labels
      console.log("Exam Format Name: ", e.value);
      return e.value;
    }
	render() {
		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Student overall Marks"
			},
			axisX: {
				valueFormatString: ""
			},
			axisY: {
				labelFormatter: this.labelFormatter,
			},
			toolTip: {
				shared: true
			},
			legend:{
				cursor: "pointer",
				itemclick: this.toggleDataSeries
			},
			data: [{
				type: "stackedBar",
				name: "Social",
				showInLegend: "true",
				xValueFormatString: "",
				yValueFormatString: "",
				dataPoints: [
					{ x: 1, y: 24 },
					{ x: 2, y: 45 },
					{ x: 3, y: 71 },
					{ x: 4, y: 41 },
					{ x: 5, y: 60 },
					{ x: 6, y: 75 },
				]
			},
			{
				type: "stackedBar",
				name: "Science",
				showInLegend: "true",
				xValueFormatString: "",
				yValueFormatString: "",
				dataPoints: [
					{ x: 1, y: 86 },
					{ x: 2, y: 95 },
					{ x:3, y: 71 },
					{ x: 4, y: 58 },
					{ x: 5, y: 60 },
					{ x: 6, y: 65 },
					
				]
			},
			{
				type: "stackedBar",
				name: "english",
				showInLegend: "true",
				xValueFormatString: "",
				yValueFormatString: "",
				dataPoints: [
					{ x: 1, y: 48 },
					{ x: 2, y: 45 },
					{ x: 3, y: 41 },
					{ x: 4, y: 55 },
					{ x: 5, y: 80 },
					{ x: 6, y: 85 },
				
				]
			},
			{
				type: "stackedBar",
				name: "telugu",
				showInLegend: "true",
				xValueFormatString: "",
				yValueFormatString: "",
				dataPoints: [
					{ x: 1, y: 61 },
					{ x: 2, y: 55 },
					{ x: 3, y: 61 },
					{ x: 4, y: 75 },
					{ x: 5, y: 80 },
					{ x: 6, y: 85 },
					
				]
			},
			{
				type: "stackedBar",
				name: "hindi",
				showInLegend: "true",
				xValueFormatString: "",
				yValueFormatString: "",
				dataPoints: [
					{ x: 1, y: 52 },
					{ x: 2, y: 55 },
					{ x: 3, y: 20 },
					{ x: 4, y: 35 },
					{ x: 5, y: 30 },
					{ x: 6, y: 45 }
				]
			},{
				type: "stackedBar",
				name: "maths",
				showInLegend: "true",
				xValueFormatString: "",
				yValueFormatString: "",
				dataPoints: [
					{ x: 1, y: 86 },
					{ x: 2, y: 95 },
					{ x: 3, y: 71 },
					{ x: 4, y: 58 },
					{ x: 5, y: 60 },
					{ x: 6, y: 65 },
				]
			},
    ]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				onRef={ref => this.chart = ref}
			/>
			
		</div>
		);
	}
}
export default Results;   