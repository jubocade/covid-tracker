import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({numberInfected, numberRecoveries, numberDeaths, query}) => {

    let stepSize;
    let max;
    let country;

    query == '' ? country = 'the World' : country = query.substr(10);

    if(numberInfected <= 30) {
        stepSize = 5;
        max =Math.round((numberInfected + 5)/10)*10;
    }

    else if(numberInfected > 30 && numberInfected <= 100) {
        stepSize = 10;
        max =Math.round((numberInfected + 10)/10)*10;
    }

    else if(numberInfected > 100 && numberInfected <= 200) {
        stepSize = 20;
        max =Math.round((numberInfected + 20)/100)*100;
    }

    else if(numberInfected > 200 && numberInfected <= 500) {
        stepSize = 50;
        max =Math.round((numberInfected + 50)/100)*100;
    }

    else if(numberInfected > 500 && numberInfected < 1000) {
        stepSize = 100;
        max =Math.round((numberInfected + 100)/100)*100;
    }

    else if(numberInfected >= 1000 && numberInfected <= 2000) {
        stepSize = 200;
        max =Math.round((numberInfected + 200)/100)*100;
    }

    else if(numberInfected > 2000 && numberInfected <= 5000) {
        stepSize = 500;
        max =Math.round((numberInfected + 1000)/1000)*1000;
    }

    else if(numberInfected > 5000 && numberInfected < 10000) {
        stepSize = 1000;
        max =Math.round((numberInfected + 1000)/1000)*1000;
    }

    else if(numberInfected >= 10000 && numberInfected <= 20000) {
        stepSize = 2000;
        max =Math.round((numberInfected + 2000)/1000)*1000;
    }

    else if(numberInfected > 20000 && numberInfected <= 50000) {
        stepSize = 5000;
        max =Math.round((numberInfected + 5000)/10000)*10000;
    }

    else if(numberInfected > 50000 && numberInfected < 100000) {
        stepSize = 10000;
        max =Math.round((numberInfected + 10000)/10000)*10000;
    }

    else if(numberInfected >= 100000 && numberInfected <= 200000) {
        stepSize = 20000;
        max =Math.round((numberInfected + 20000)/10000)*10000;
    }

    else if(numberInfected > 200000 && numberInfected <= 400000) {
        stepSize = 40000;
        max =Math.round((numberInfected + 40000)/100000)*100000;
    }

    else if(numberInfected > 400000 && numberInfected <= 800000) {
        stepSize = 80000;
        max =Math.round((numberInfected + 80000)/100000)*100000;
    }

    else if(numberInfected > 800000 && numberInfected < 1000000) {
        stepSize = 200000;
        max =Math.round((numberInfected + 200000)/100000)*100000;
    }

    else if(numberInfected >= 1000000 && numberInfected <= 3200000) {
        stepSize = 250000;
        max =Math.round((numberInfected + 250000)/100000)*100000;
    }

    else if(numberInfected > 3200000 && numberInfected <= 6400000) {
        stepSize = 640000;
        max =Math.round((numberInfected + 640000)/1000000)*1000000;
    }

    else if(numberInfected > 6400000 && numberInfected < 10000000) {
        stepSize = 2000000;
        max =Math.round((numberInfected + 2000000)/1000000)*1000000;
    }

    else if(numberInfected >= 10000000 && numberInfected <= 20000000) {
        stepSize = 2500000;
        max =Math.round((numberInfected + 2000000)/10000000)*10000000;
    }

    else if(numberInfected > 20000000 && numberInfected <= 40000000) {
        stepSize = 5000000;
        max =Math.round((numberInfected + 5000000)/1000000)*1000000;
    }

    else if(numberInfected > 40000000 && numberInfected < 100000000) {
        stepSize = 10000000;
        max =Math.round((numberInfected + 10000000)/1000000)*1000000;
    }

    else if(numberInfected >= 100000000 && numberInfected <= 500000000) {
        stepSize = 20000000;
        max =Math.round((numberInfected + 20000000)/100000000)*100000000;
    }

    else if(numberInfected > 500000000 && numberInfected < 1000000000) {
        stepSize = 100000000;
        max =Math.round((numberInfected + 100000000)/100000000)*100000000;
    }

    else {
        stepSize = 200000000;
        max =Math.round((numberInfected + 200000000)/1000000000)*1000000000;
    }

    const data ={
        labels: [
        'Infected',
        'Recovered',
        'Dead'
        ],

        datasets: [
            {
                data: [numberInfected, numberRecoveries, numberDeaths],
                borderColor: [
                    'rgba(157, 30, 179, 0.7)',
                    'rgba(33, 179, 30, 0.7)',
                    'rgba(201, 8, 8, 0.7)'
                ],
                backgroundColor: [
                    'rgba(157, 30, 179, 0.7)',
                    'rgba(33, 179, 30, 0.7)',
                    'rgba(201, 8, 8, 0.7)'
                ]
            }
        ]
    }

    const options = {
        responsive: "true",
        maintainAspectRatio: 'false',
        title : {
            display: "true",
            text: `Epidemiological situation in ${country}`
        },

        legend: {
            display: false
        },

        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: max,
                        stepSize: stepSize
                    }
                }
            ]
        }
    }

    return (
         <Bar className="ch" data={data} options={options} />
    )
}

export default BarChart;
