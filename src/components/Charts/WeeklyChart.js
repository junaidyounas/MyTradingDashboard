import React, { Component } from "react";
import Chart from "react-apexcharts";

class WeeklyChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: 'Sales',
        data: [1000, 2000, 800, 700, 5000, 2000, 1200, 600, 200, 700, 800, 2000]
      }],
      options: {
        chart: {
          height: 200,
          type: 'line',
          
          dropShadow: {
            enabled: true,
            color: '#EB5757',
            top: 4,
            left: 0,
            blur: 26,
            opacity: 0.5
          },
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: true,
        },
        stroke: {
          width: 4,
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ['1/11/2022', '2/11/2022', '3/11/2022', '4/11/2022', '5/11/2022', '6/11/2022', '7/11/2022', '8/11/2022', '9/11/2022', '10/11/2022', '11/11/2022', '12/11/2022'],
          tickAmount: 10,
          labels: {
            formatter: function(value, timestamp, opts) {
              return opts.dateFormatter(new Date(timestamp), 'ddd')
            }
          }
        },
        title: {
    
       
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            gradientToColors: [ '#EB5757'],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [235, 87, 87, 1]
          },
        },
        yaxis: {
          min: 0,
          max: 5000
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: 5000,
          offsetX: 0
        }
      },
    
    
    };
    };

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default WeeklyChart;
