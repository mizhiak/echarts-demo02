
$(function () {
    map();
    function map() {
        // 基于准备好的dom，初始化echarts实例
        var PCList=[
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
      //                    show: false //不显示提示标签
                  formatter: '{b}', //提示标签格式
                  backgroundColor:"#104E8B",//提示标签背景颜色
                  textStyle:{color:"#fff"},//提示标签字体颜色
                  formatter: function(params,ticker,callback){
                    return params.data.name+ '<br />' +'PC出货量' +':'+ params.data.value + '<br />'+
                    '服务器出货量' +':'+ params.data.value2
      
                  }
              },
              series: [
                  {
                      name: '数据类型',
                      type: 'map',
                      mapType: '广西',
                      selectedMode : 'single',
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
                      data:PCList
                      
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
          myChart.on('mouseover', function (params) {
                  var dataIndex = params.dataIndex;
                  console.log(params);
              });
    }

})

