
function showInventoryStatus_PC() {

   // window.alert("showInventoryStatus");

    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            position:function(p)  {   //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            }
        },
        legend: {
            orient: 'vertical',
            top:'center',
            right:0,
            itemWidth: 10,
            itemHeight: 10,
            data:['服务器PR210K','服务器PR212K','AI'],
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize:'12',
            }
        },
        series: [{
            name:'数据',
            type:'pie',
            center: ['35%', '50%'],
            radius: ['40%', '50%'],
            color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828','#e58c00','#eb295b'],	
            label: {show:false},
            labelLine: {show:false},
            data:[
                {value:4, name:'服务器PR210K'},
                {value:2, name:'服务器PR212K'},
                {value:2, name:'AI'},
            ]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    //myChart.setOption(option);

    return option;
}

function showInventoryStatus_Server() {

   // window.alert("showInventoryStatus_Server");

    //var myChart = echarts.init(document.getElementById('fb01'));
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            position:function(p)  {   //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            }
        },
        legend: {
           orient: 'vertical',
            top:'center',
            right:0,
            itemWidth: 10,
            itemHeight: 10,
            data:['服务器PR210K','服务器PR212K','AI'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize:'12',
                }
        },
        series: [{
            name:'数据',
            type:'pie',
            center: ['35%', '50%'],
            radius: ['40%', '50%'],
            color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828','#e58c00','#eb295b'],	
            label: {show:false},
            labelLine: {show:false},
            data:[
  
                {value:4, name:'服务器PR210K'},
                {value:2, name:'服务器PR212K'},
                {value:2, name:'AI'},
            ]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    //myChart.setOption(option);

    return option;
}



        
        
        


        









