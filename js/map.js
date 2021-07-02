
$(function () {
    map();
    function map() {
        // 基于准备好的dom，初始化echarts实例
        var data=[
          {name:"南宁市",value: 1000,value2:111},
          {name:"百色市",value: 2000,value2:111},
          {name:"玉林市",value: 3000,value2:111},
          {name:"崇左市",value: 4000,value2:111},
          {name:"钦州市",value: 5000,value2:111},
          {name:"河池市",value: 6000,value2:111},
          {name:"柳州市",value: 7000,value2:111},
          {name:"桂林市",value: 8000,value2:111},
          {name:"贺州市",value: 9000,value2:111},
          {name:"来宾市",value: 99000,value2:111},
          {name:"贵港市",value: 199000,value2:111},
          {name:"梧州市",value: 1999000,value2:111},
          {name:"防城港市",value: 1111000,value2:111},
          {name:"北海市",value: 1222000,value2:111}
        ]
        
        var myChart = echarts.init(document.getElementById('guangxi-map'));
        var option = {
            title: {
                text : '广西地图',
                subtext : '各市区显示',
                left: "650",
                textStyle:{
                  color : '#ffffff'
                },
                subtextStyle: {
                  color : '#ffffff'
                }
            },
            tooltip: {
              show:true,
              // triggerOn: 'none',
              // formatter: '{b}', //提示标签格式
              backgroundColor:"#104E8B",//提示标签背景颜色
              textStyle:{color:"#fff"},//提示标签字体颜色
              formatter: function(params){
                return params.data.name+ '<br />' +'PC出货量' +':'+ params.data.value + '<br />'+
                '服务器出货量' +':'+ params.data.value2
              }
            },
            // geo:  {
            //   show: true,
            //   map: '广西',
            //   aspectScale: 1,
            // },
            series: [
            {
              name: '数据类型',
              type: 'map',
              mapType: '广西',
              selectedMode : 'single',
              zoom: 1,
              aspectScale: 1,
              label: {
                  normal: {
                      show: true,//显示市区标签
                      textStyle:{color:"#FFFFFF"},//省份标签字体颜色
                  },
                  emphasis: {//对应的鼠标悬浮效果
                      show: true,
                      textStyle:{color:"#FFFFFF"}
                      
                  }
                },
                itemStyle:{
                  normal: {
                      borderWidth: .5,//区域边框宽度
                      borderColor: '#009fe8',//区域边框颜色
                      areaColor:"#013C62",//区域颜色
                      label:{show:true},
                  },
                  emphasis: {
                      show:true,
                      borderWidth: .5,
                      borderColor: '#104E8B',
                      areaColor:"#1C86EE",
                      label: {show:true}
                  }
                },
                data:data
                
                    // {name:'南宁市', selected:true,label:{normal:{show: true,
                    // formatter: function (params){
                    //   return params.name+"\n"+ params.series.name + ;
                    // }}}},//**为选中状态
                    // {name:'百色市', selected:true,},//**为选中状态
                    // {name:'玉林市', selected:true,},//**为选中状态
                    // {name:'柳州市', selected:true,},//**为选中状态
            }]
            
        };
        
        myChart.setOption(option);
        // myChart.on('mouseover', function (params) {
        //         var dataIndex = params.dataIndex;
        //         console.log(params);
        //     });

        //地图tooltip轮询播放
        var index = 0;
        var mTime = setInterval(function(){
          myChart.dispatchAction({
            type: 'showTip',
            // 系列的 index，在 tooltip 的 trigger 为 axis 的时候可选。
            seriesIndex: 0,
            // 数据项的 index，如果不指定也可以通过 name 属性根据名称指定数据项
            dataIndex: index
          });
          index++;
          if (index > data.length){
            index = 0
          }
        },1500)
        
        //
        var index1 = 0;
        var mTime1 = setInterval(function(){
          myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: index1
          });
          index1++;
          if (index1 > data.length){
            index1 = 0
            myChart.dispatchAction({
              type: 'downplay',
            });
          }
        },1500)
    }

})

