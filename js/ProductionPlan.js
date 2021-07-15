function showProductionPlan() {






    var pc_array = [1000, 1000, 1000, 1000, 1000, 500, 0];
    var server_array = [100, 100, 100, 100, 100, 500, 0];
    var ai_array = [100, 100, 100, 100, 100, 50, 0];

    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#3398DB'
                }
            }
        },

        legend: {
            data: ['PC', 'Server', 'AI'],
            textStyle:{
                color: '#ffffff'
            }
        },

        toolbox: {
            feature: {
                // saveAsImage: {}
            }
        },

        grid:   {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },

        xAxis: [{

            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
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
        }],

        yAxis: [{
            type: 'value',
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
        }],

        series: [
            {
                name: 'PC',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: pc_array,
                itemStyle:{
                    color: '#00BFFF'
                }
            },
            {
                name: 'Server',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: server_array,
                itemStyle:{
                    color: '#3CB371'
                }
            },
            {
                name: 'AI',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: ai_array,
                itemStyle:{
                    color: '#FF8C00'
                }
            }
        ]
    };

    return option;
}



        
        
        


        









