/*
 * @Author: your name
 * @Date: 2020-07-14 17:04:15
 * @LastEditTime: 2020-07-20 15:04:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Wellness Report\js\diagram.js
 */
function diagram(dome, data, color, dataTwo) {
    var chart = Highcharts.chart(dome, {
        chart: {
            type: 'area',
            plotBackgroundColor: '#fff'
        },
        exporting: {
            enabled: false
        },
        title: {
            text: null
        },
        credits: {
            enabled: false
        },
        colors: [color],
        plotOptions: {
            area: {
                fillOpacity: .1
            }
        },
        legend: {
            enabled: false
        },
        yAxis: {
            title: null,
            softMax: 500,
            labels: {
                formatter: function () {
                    return this.value
                },
                style: {
                    color: '#9FA3AE',
                    fontSize: '15px'
                }
            }
        },
        xAxis: {
            type: 'category',
            labels: {
                style: {
                    color: '#9FA3AE',
                    fontSize: '16px'
                }
            }

        },
        series: [{ data: data }, { data: dataTwo }]
    });
}
