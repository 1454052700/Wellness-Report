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
        lang:{
            noData: "暂无数据"
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

function diagram2(dome, data, color, dataTwo) {
    console.log(data, "data")

    let xdata = [];
    data.forEach(i => {
        xdata.push(i.name)
    })
    console.log(xdata, "xdata")
    var chart = Highcharts.chart(dome, {
        chart: {
            type: 'area',
            plotBackgroundColor: '#fff'
        },
        lang:{
            noData: "暂无数据"
        },
        tooltip: {
            formatter: function () {
                if (this.series.name == "Series 2") {
                    return this.x + '<br/><br/>' +'<strong>' + "入睡时间 " + '</strong>' + 
                        Highcharts.dateFormat('%H:%M', this.y);
                } else {
                    return this.x + '<br/><br/>' +'<strong>' + "起床时间 " + '</strong>' + 
                        Highcharts.dateFormat('%H:%M', this.y);
                }
            },
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
        // colors: ["#61C2F3","rgba(128,123,233)"],
        plotOptions: {
            area: {
                fillOpacity: .1
            }
        },
        legend: {
            enabled: false
        },
        yAxis: {
            type: 'datetime',
            title: null,
            labels: {
                formatter: function () {
                    return Highcharts.dateFormat('%H:%M', this.value);
                }
            }
        },
        xAxis: {
            labels: {
                style: {
                    color: '#9FA3AE',
                    fontSize: '16px'
                }
            },
            categories: xdata

        },
        series: [{ data: data }, { data: dataTwo }]
    });
}
