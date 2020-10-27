import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {

    const data ={
        labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        ],

        datasets: [
            {
                label: 'Sales for 2020(M)',
                data: [3, 2, 2, 1, 5],
                borderColor: ['rgba(242, 49, 49, 1)'],
                backgroundColor: ['rgba(242, 49, 49, 1)'],
                pointBackgroundColor: ['rgba(242, 49, 49, 1)'],
                pointBorderColor: ['rgba(242, 49, 49, 1)']
            },

            {
                label: 'Sales for 2019(M)',
                data: [1, 3, 2, 2, 3],
                borderColor: ['rgba(239, 242, 49, 1)'],
                backgroundColor: ['rgba(239, 242, 49, 1)'],
                pointBackgroundColor: ['rgba(239, 242, 49, 1)'],
                pointBorderColor: ['rgba(239, 242, 49, 1)']
            }
        ]
    }

    const options = {
        title : {
            display: "true",
            text: "Line chart"
        },

        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 6,
                        stepSize: 1
                    }
                }
            ]
        }
    }

    return (
       <Line data={data} options={options} />
    )
}

export default LineChart;
