// Chart Options
const options = {
    chart: {
        enabled: true,
        easing: 'linear',
        height: 450,
        weidth: '100%',
        type: 'bar',
        background: '#bdbfbe',
        foreColor: '#FDF5E6'
    },
    //data goes in 'series' an array with an object inside.
    series: [{
        name: 'Count of Unique Species',
        data: [349, 1420]
    }],
    xaxis: {
        categories: ['Animals', 'Plants']
    },
    plotOptions: {
        bar: {
            hortizontal: false,
            distributed: true
        }
    },
        fill: {
            colors: ['#191970','#006400'],
        },
        dataLabels: {
            enabled: false
        },
        title: {
            text: 'Number of Plant & Animal Species in Shenandoah',
            align: 'center',
            margin: 20,
            offsetY: 20,
            style: {
                fontSize: '25px'
            }
        }
};

// Init Chart
const chart = new ApexCharts(document.querySelector('#chart'), options);
// Render Chart
chart.render();