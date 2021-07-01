 $(window).load(function(){$(".loading").fadeOut()})  
$(function () {
    echarts_1();
echarts_4()
echarts_31()
function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));
     var data = [{
        title: '**省'
    },
    ['本周'],
    [{
        name: '固态硬盘',
        max: 150
    }, {
        name: '系统',
        max: 150
    }, {
        name: '内存条',
        max: 150
    }, {
        name: '主板',
        max: 150
    }, {
        name: '机械硬盘',
        max: 150
    }],
    [43, 80, 28, 13, 120],
]
option = {

    color: ['#9DD060', '#35C96E', '#4DCEF8'],

    tooltip: {},
  
    radar: {
        center: ['50%', '50%'],
	 radius: ["25%", "70%"],
		
        name: {
            textStyle: {
                color: '#72ACD1'
            }
        },

          splitLine: {

              lineStyle: {

                  color: 'rgba(255,255,255,.0',

                  width: 2

              }

          },
          axisLine: {
              lineStyle: {
                  color: 'rgba(255,255,255,0.2)',
                  width: 1,
                  type: 'dotted'

              },

          },
        splitArea: {
            areaStyle: {
                  color: ['rgba(255,255,255,.1)', 'rgba(255,255,255,0)']
              }
        },
        indicator: data[2]
    },
    series: [{
        name: '',
        type: 'radar',
        data: [{
                areaStyle: {
                    normal: {
                        opacity: 0.3,
                    }
                },
                value: data[3],
                name: data[1][0]
            },
            {
                areaStyle: {
                    normal: {
                        opacity: 0.3,
                    }
                },
                value: data[4],
                name: data[1][1]
            },
            {
                areaStyle: {
                    normal: {
                        opacity: 0.3,
                    }
                },
                value: data[5],
                name: data[1][2]
            }
        ]
    }]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
        var myChart2 = echarts.init(document.getElementById('echart3'));
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['PC', '服务器'],

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
        bottom: '0%',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
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
		axisLabel:  {
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
           //formatter: '{value} %'
			show:true,
			 textStyle: {
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
    series: [{
        name: 'PC',
        type: 'bar',
        data: [200, 300, 300, 900, 1500, 1200, 600],
        barWidth:'20%', //柱子宽度
       // barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color:'#2f89cf',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    }, {
        name: '服务器',
        type: 'bar',
		data: [100, 400, 500, 1100, 1200, 900, 500],
		barWidth:'20%',
       // barGap: 1,
        itemStyle: {
            normal: {
                color:'#62c98d',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    },
	]
};
option2 = {
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
  grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
  },
  xAxis: [
      {
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
    axisLabel:  {
                interval: 0,
              // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
          color: "rgba(255,255,255,.6)",
                    fontSize: '14',
                },
            },
      }
  ],
  yAxis: [
      {
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
    axisLabel:  {
                interval: 0,
              // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
          color: "rgba(255,255,255,.6)",
                    fontSize: '14',
                },
            },
      }
  ],
  series: [
      {
          name: 'PC',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          emphasis: {
              focus: 'series'
          },
          data: [120, 132, 101, 134, 90, 230, 210],
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
          data: [220, 182, 191, 234, 290, 330, 310],
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
          data: [150, 232, 201, 154, 190, 330, 410],
          itemStyle:{
            color: '#FF8C00'
          }
      }
  ]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option2);
        myChart2.setOption(option);
        
        var index = 0; //播放所在下标
				var mTime = setInterval(function() {
					myChart.dispatchAction({
						type: 'showTip',
						seriesIndex: 0,
						dataIndex: index
					});
					index++;
					if(index > 6) {
						index = 0;
					}
				}, 1000);

        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_31() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb01'));
	var myChart2 = echarts.init(document.getElementById('fb02')); 
	var myChart3 = echarts.init(document.getElementById('fb03'));
	var myChart4 = echarts.init(document.getElementById('fb04')); 
	var myChart5 = echarts.init(document.getElementById('myd1')); 

	var myChart7 = echarts.init(document.getElementById('sysx')); 
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
       orient: 'vertical',
top:'25%',
		right:0,
       itemWidth: 10,
        itemHeight: 10,
        data:['20-29岁','30-39岁','40-49岁','50岁以上'],
                textStyle: {
            color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    series: [
        {
        	name:'年龄分布',
            type:'pie',
			center: ['35%', '50%'],
            radius: ['40%', '50%'],
color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828','#e58c00','#eb295b'],	
            label: {show:false},
			labelLine: {show:false},
            data:[
  
                {value:4, name:'20-29岁'},
                {value:2, name:'30-39岁'},
                {value:2, name:'40-49岁'},
                {value:1, name:'50岁以上'},
            ]
        }
    ]
};
option2 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
        orient: 'vertical',
		top:'25%',
		right:'8%',
       itemWidth: 10,
        itemHeight: 10,
        data:['博士','硕士','本科','专科'],
                textStyle: {
            color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    series: [
        {
        	name:'学历构成',
            type:'pie',
			center: ['40%', '50%'],
            radius: ['40%', '50%'],
color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828','#e58c00','#eb295b'],	
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value:10, name:'博士'},
                {value:20, name:'硕士'},
                {value:30, name:'本科'},
                {value:40, name:'专科'},
               
            ]
        }
    ]
};
	option3 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
position:function(p){   //其中p为当前鼠标的位置
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
    series: [
        {
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
        }
    ]
};
option4 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
        orient: 'vertical',
		top:'center',
		right:'8%',
       itemWidth: 10,
        itemHeight: 10,
        data:['主板','内存','电源','散热器','机械硬盘','SSD固态','显卡'],
                textStyle: {
            color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    series: [
        {
        	name:'业务分类',
            type:'pie',
			center: ['40%', '50%'],
            radius: ['40%', '50%'],
			color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828','#e58c00','#eb295b','#FFFF6F','#FF79BC'],	
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value:10, name:'主板'},
                {value:20, name:'内存'},
                {value:30, name:'电源'},
                {value:40, name:'散热器'},
                {value:50, name:'硬件类'},
                {value:60, name:'机械硬盘'},
                {value:60, name:'SSD固态'},
                {value:60, name:'显卡'},
            ]
        }
    ]
};
// 	option5 = {
//     grid: {
//         left: '0',
//         right: '0',
// 		top: '10%',
//         bottom: '24%',
//         //containLabel: true
//     },
//   legend: {
//         data: ['等待', '外包人员', '内部技术人员'],
// 		bottom:0,
// 	   itemWidth: 10,
//         itemHeight: 10,
//         textStyle: {
//             color: "#fff",
// 		    fontSize: '10',

//         },
 
//         itemGap: 5
//     },
//     tooltip: {
//         show: "true",
//         trigger: 'item'
//     },
//     yAxis: {
//         type: 'value',
// 		show: false,
//     },
//     xAxis: [{
//             type: 'category',
//             axisTick: {
//                 show: false
//             },
//             axisLine: {
//                 show: true,
//                 lineStyle: {
//                     color: '#363e83',
//                 }
//             },
//             axisLabel: {
// 				show: false,
//              //   inside: true,
//                 textStyle: {
//                   color: "rgba(255,255,255,1)",
//                     fontWeight: 'normal',
//                     fontSize: '12',
//                 },
//                 // formatter:function(val){
//                 //     return val.split("").join("\n")
//                 // },
//             },
//             data: ['业务办量统计']
//         }

//     ],
//     series: [
// 		 {
//             name: '等待',
//             type: 'bar',
//             barWidth: '20',
			 
//             itemStyle: {
//                 normal: {
//                     show: true,
//                     color:'#20aa92',
//                     barBorderRadius: 50,
//                     borderWidth: 0,
//                 }
//             },
//             zlevel: 2,
//             barGap: '100%',
//             data: [20],
// 			 label: {
// 				  formatter: "{c}人",
//             show: true,
//             position: 'top',
//             textStyle: {
// 				fontSize:12,
//                 color: 'rgba(255,255,255,.6)',
//             }
//         },
//         }, 
// 		{
//             name: '外包人员',
//             type: 'bar',
//             itemStyle: {
//                 normal: {
//                     show: true,
//                     color:'#f4664e',
//                     barBorderRadius: 50,
//                     borderWidth: 0,
//                 }
//             },
//             zlevel: 2,
//             barWidth: '20',
//             data: [40],
// 			 label: {
// 				   formatter: "{c}人",
//             show: true,
//             position: 'top',
//             textStyle: {
// 				fontSize:12,
//                 color: 'rgba(255,255,255,.6)',
//             }
//         },
//         }, 
// 			{
//             name: '内部技术人员',
//             type: 'bar',
//             itemStyle: {
//                 normal: {
//                     show: true,
//                     color:'#0c93dc',
//                     barBorderRadius: 50,
//                     borderWidth: 0,
//                 }
//             },
//             zlevel: 2,
//             barWidth: '20',
//             data: [127],
// 			 label: {
// 				  formatter: "{c}人",
//             show: true,
//             position: 'top',
//             textStyle: {
// 				fontSize:12,
//                 color: 'rgba(255,255,255,.6)',
//             }
//         },
//         }, 

//     ]
// };


	option7 = {
    title: {
      text: '销售量',
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
      containLabel: true
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
axisLabel:  {
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
      data: ['河池','北海','玉林', '桂林', '防城港', '崇左', '百色', '南宁'],
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
axisLabel:  {
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
  series: [
      {
          name: '2021年',
          type: 'bar',
          data: [90,88,182, 234, 290, 104, 134, 630],
          itemStyle:{
            color: '#1E90FF'
          }
      } 
  ]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        myChart2.setOption(option2);
        myChart3.setOption(option3);
        myChart4.setOption(option4);
        // myChart5.setOption(option5);
 
        myChart7.setOption(option7);

        window.addEventListener("resize",function(){
            myChart.resize();
            myChart7.resize();
            myChart2.resize();
            myChart3.resize();
            myChart4.resize();
            myChart5.resize();
 
        });
    }
})



		
		
		


		









