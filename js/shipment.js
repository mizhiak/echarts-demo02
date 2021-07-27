function ShowTotalShipment() {

    var option = {
            tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        
        legend: {
            data: ['PC-KP', 'PR210K','PC-QS'],
            top:'2%',
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: '12',
            },
            itemWidth: 12,
            itemHeight: 12,
            itemGap: 35
        },

	grid: {
		left: '0%',
		top:'40px',
		right: '0%',
		bottom:	'0%',
	   containLabel: true
	},
	xAxis: [{
		type: 'category',
			data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
		axisLine: {
			show: true,
		 lineStyle:	{
				color: "rgba(255,255,255,.1)",
				width: 1,
				type: "solid"
			},
		},
		
		axisTick: {
			show: false,
		},
		axisLabel:	{
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
		axisLabel: {
		   //formatter:	'{value} %'
			show:true,
			 textStyle:	{
					color: "rgba(255,255,255,.6)",
					fontSize: '14',
				},
		},
		axisTick: {
			show: false,
		},
		axisLine: {
			show: true,
			lineStyle: {
				color: "rgba(255,255,255,.1	)",
				width: 1,
				type: "solid"
			},
		},
		splitLine: {
			lineStyle: {
			   color: "rgba(255,255,255,.1)",
			}
		}
	}],
	series:	[{
		name: 'PC-KP',
		type: 'bar',
		data: [200,	300, 300, 900, 1500, 1200, 600],
		barWidth:'20%',	//柱子宽度
	   // barGap: 1, //柱子之间间距
		itemStyle: {
			normal:	{
				color:'#2f89cf',
				opacity: 1,
				barBorderRadius: 5,
			}
		}
	}, {
		name: 'PR210K',
		type: 'bar',
		data: [100,	400, 500, 1100,	1200, 900, 500],
		barWidth:'20%',
	   // barGap: 1,
		itemStyle: {
			normal:	{
				color:'#62c98d',
				opacity: 1,
				barBorderRadius: 5,
			}
		}
	},
  {
		name: 'PC-QS',
		type: 'bar',
		data: [100,	400, 500, 1100,	1200, 900, 500],
		barWidth:'20%',
	   // barGap: 1,
		itemStyle: {
			normal:	{
				color:'#00FFFF',
				opacity: 1,
				barBorderRadius: 5,
			}
		}
	},
	]
    };

    return option;
}



        
        
        


        









