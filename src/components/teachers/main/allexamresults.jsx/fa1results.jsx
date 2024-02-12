import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Fa1 extends Component {
	render() {
		const options = {
			title: {
				text: "unit test "
			},
			data:[
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: [
					{ label: "Telugu",  y: 10  },
					{ label: "Hindi", y: 15  },
					{ label: "English", y: 25  },
					{ label: "Mathematics",  y: 30  },
					{ label: "Science",  y: 28  },
					{ label: "Social",  y: 20 }

				]
			}
			]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			
		</div>
		);
	}
}
export default Fa1;