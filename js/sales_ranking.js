function ShowSalesRanking() {

    var option = {
        title: {
            text: '出货量/台',
            textStyle:{
                color: '#ffffff'
            }
        },
    
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
    
        legend: {
            data: ['2021年'],
            textStyle:{
                color:'#ffffff'
            }
        },
    
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel:	true
        },
    
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    width: 1,
                    type: "solid"
                },
            },

            axisTick: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: '14',
                },
            },
        },
    
        yAxis: {
            type: 'category',
            data: ['贵港','来宾','钦州','河池','北海','玉林', '桂林', '防城港', '崇左',	'百色', '南宁'],
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    width: 1,
                    type: "solid"
                },
            },

            axisTick: {
                show: false,
            },
    
            axisLabel: {
                interval: 0,
                // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: '14',
                },
            },
        },
    
        series: [{
            name:   '2021年',
            type:   'bar',
            data:   [77,68,56,90,88,182,234,290,104,134,	630],
            itemStyle:{
                color: '#1E90FF'
            }
        }]
    };

    return option;
}



        
        
        


        









