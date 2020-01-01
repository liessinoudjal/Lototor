require('../../css/chartjs/chartjs.scss');

import Chart from 'chart.js';

const ctx = document.getElementById('myChart');
const hits = JSON.parse(ctx.dataset.hits);
const countNumber= hits.length;
const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);


const moyenneHits = hits.reduce(reducer)/50;

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels:[...Array(hits.length).keys()].map(x => "numero "+ ++x),
        datasets: [{
            label: 'nombres de sorti',
            data: hits,
            backgroundColor:  Array(countNumber).fill( 'rgba(255, 99, 132, 0.2)'),
            borderColor:  Array(countNumber).fill( 'rgba(255, 99, 132, 1)'),
            borderWidth: 1,
            order: 1
        }, {
            label: 'Moyenne idéale',
            data: Array(countNumber).fill(moyenneHits),
            type: 'line',
            order: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});