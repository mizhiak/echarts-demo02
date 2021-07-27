
/***
    day : int 型， 今天的星期，配合 Week数组使用，表示下标
    返回: 字符串,类似  "星期一"
***/
function day_to_str( day ) {
    var str = "";
    var Week = ['日','一','二','三','四','五','六'];
    str += '星期' + Week[day];
    return str;
}

/***
    数据库返回的日期需要转换成可读形式
    例如: d20210714  表示 2021年7月14日
***/ 
function str_to_day_for_database(str_from_database) {
    var str = "";
    
    return str;
}

function num_to_string_format_date(num_date) {
    var str_ret = num_date.toString();
    if (num_date < 10)
    {
        str_ret = '0' + str_ret;
    }
    return str_ret;
}

//得到前N天或后N天的日期
function showdate(n) {
    var uom = new Date(new Date()-0+n*86400000);
    uom = "d" + uom.getFullYear() + "" + num_to_string_format_date(uom.getMonth()+1) + "" + num_to_string_format_date(uom.getDate());
    return uom;
}

function showdate2(n) {
    var uom = new Date(new Date()-0+n*86400000);
    uom = num_to_string_format_date(uom.getMonth()+1) + "/" + num_to_string_format_date(uom.getDate());
    return uom;
}

function showProductionPlan() {

    var todayDate = new Date();
    
    var current_day = parseInt(todayDate.getDay());
    
    var array_plan_date = [showdate(-3), showdate(-2), showdate(-1), showdate(0), showdate(1), showdate(2), showdate(3)];
    var array_plan_data_x = [showdate2(-3), showdate2(-2), showdate2(-1), showdate2(0), showdate2(1), showdate2(2), showdate2(3)];
    //document.write(array_plan_date);

    var pc_array = [0, 0, 0, 0, 0, 0, 0];
    var server_array = [0, 0, 0, 0, 0, 0, 0];
    var ai_array = [0, 0, 0, 0, 0, 0, 0];

    /*** 从数据库获取 排产计划***/
    var objConnection = new ActiveXObject("ADODB.Connection");
    var strdsn = "driver={sql server};server=192.168.83.253;uid=sa;password=11111111;database=r9-data-076";
    var ret = objConnection.Open(strdsn);

    var rs = new ActiveXObject("ADODB.Recordset");
    var strQuery = "select  _inv_spec, _day, sum(_quantity)  from __mplan_product_master_plan " + "where " + 
        " _day=\'" + array_plan_date[0] + "\'" + " or " + " _day=\'" + array_plan_date[1] + "\'" + " or " +
        " _day=\'" + array_plan_date[2] + "\'" + " or " + " _day=\'" + array_plan_date[3] + "\'" + " or " +
        " _day=\'" + array_plan_date[4] + "\'" + " or " + " _day=\'" + array_plan_date[5] + "\'" + " or " +
        " _day=\'" + array_plan_date[6] + "\'" + 
        " GROUP BY  _day, _inv_spec ";
    //document.write(strQuery + "<br/>");
    var rret = rs.Open(strQuery, objConnection);
    
    try{
        rs.MoveFirst();
    } catch(e) {
        //document.write("MoveFirst error " + e + "<br/>");
    }
    //document.write("return " + rs.BOF + "<br/>");

    while (!rs.BOF && !rs.EOF) {
        //document.write(rs.fields(0) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
        //document.write(rs.fields(1) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
        //document.write(rs.fields(2) + "<br/>");
        var str_f0 = String(rs.fields(0));
        var str_f1 = String(rs.fields(1));
        var _index = array_plan_date.indexOf(str_f1);
        
        if (_index != -1)
        {
            //document.write(_index + "<br/>");
            if (str_f0 == "PR210K" || str_f0 == "PR212K")
            {
                server_array[_index] = parseInt(String(rs.fields(2)));
            }
            else if (str_f0 == "PT620K" || str_f0 == "PT620Q" || str_f0 == "PT612K")
            {
                pc_array[_index] = parseInt(String(rs.fields(2)));
            }
        }

        //document.write(server_array + "<br/>");

        rs.movenext();
    }
    objConnection.Close();

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
            data: array_plan_data_x,//[day_to_str(current_day - 3), day_to_str(current_day - 2), day_to_str(current_day - 1), day_to_str(current_day), day_to_str(current_day + 1), day_to_str(current_day + 2), day_to_str(current_day + 3)],
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



        
        
        


        









