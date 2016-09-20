$(function() {
    $('#container').highcharts({
        lang:{

        },
        chart: {
            type: 'area',
            marginTop: 30
        },
        title: {
            text: ' ', //center
        },
        credits: {
            text: ' ',
            href: ' '
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                day: '%e日'
            }
        },
        yAxis: {
            lineWidth: 1,
            min: 0,
            offset: 0,
            tickWidth: 1,
            labels: {
                format: '{value}<br/> MB'
            },
            title: {
                text: ' '
            }

        },
        tooltip: {
            backgroundColor:'#50c1e9',
            shared: true,
            useHTML: true,
            pointFormat:'',
            style: {
                padding: 10,
                fontWeight: 'bold',
                color:'#ffffff'

            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            pointInterval: 1,
            name: '豆腐即可',
            align: 'left',
            data: [{
                y: 7.0,
                name: '第四打击我',
                marker: {
                    fillColor: 'white',
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[0]
                }
            }, {
                y: 6.9,
                name: 'nidawo',
                marker: {
                    fillColor: 'white',
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[3]
                },
                tooltip: {
                    enabled: false
                }
            }, {
                y: 9.5,
                name: 'shaB',
                tooltip: {
                    enabled: true
                },
                marker: {
                    fillColor: 'white',
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[0]
                }
            },
                14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6, 23.3, 18.3, 13.9, 9.6, 23.3, 18.3, 13.9, 9.6, 23.3, 18.3, 13.9, 9.6, 23.3, 18.3, 13.9
            ],
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[0],
                states:{
                    hover:{
                        enabled:false
                    }
                }
            },

            pointInterval: 24 * 3600 * 1000, // one day,
            showInLegend: false
        }]
    });
});


