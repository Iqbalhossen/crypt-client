import React, { useEffect, useState } from 'react';
import { Line } from "react-chartjs-2";
import dateFormat, { masks } from "dateformat";

  
  const options = {

    scales: {
      yAxes: [
        {
          ticks: {
            callback: function(value, index, values) {
              return value + "K";
            }
          }
        }
      ]
    }
  };
  
const TradeChart = ({dataSet}) => {

const [dataSetValue, setDataSetValue] = useState(["0","0", "0","0","0","0", "0","0","0","0","0", "0"])

const [labelValue, setLabelValue] = useState(["0","0", "0","0","0","0", "0","0","0","0","0", "0"])

    const TradeChartDataSet = {
        labels: labelValue,
        datasets: [
          {
            label: "Live Price Chart",
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(131,138,133,0.4)",
            borderColor: "#F2A900",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "#F2A900",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(131,138,133,1)",
            pointHoverBorderColor: "#F2A900",
            pointHoverBorderWidth: 2,
            // pointRadius: 1,
            pointHitRadius: 10,
            data: dataSetValue
          },
          
        ]
      }    
      
      useEffect(() => {
       
        if(dataSet.price){
          setLabelValue([...labelValue.slice(1) , dateFormat(new Date(), "h:MM:ss")  ])
          setDataSetValue( [...dataSetValue.slice(1) ,dataSet.price])
        }
    }, [dataSet])
    return (
        <div>
            <Line data={TradeChartDataSet} options={options} />
        </div>
    );
};

export default TradeChart;