
function showInventoryStatus_PC() {

    var server_cnt = 0;
    var pc_cnt = 0;
    var ai_cnt = 0;


    /*** 从数据库获取 产成品库存***/
    var objConnection = new ActiveXObject("ADODB.Connection");
    var strdsn = "driver={sql server};server=192.168.83.252;uid=sa;password=11111111;database=UFDATA_001_2020";
    var ret = objConnection.Open(strdsn);
    var rs = new ActiveXObject("ADODB.Recordset");


    var map_mb      = ["20231201A751", "12260064A751"];
    var map_memery  = ["12306043A411", "12306031X001"];
    var map_ssd     = ["21071311M980", "12510217X001"];
    var map_hdd     = ["12401041A451", "12401041A451"];
    var map_power   = ["12610112A371", "12610119X001"];
    var map_cdrom   = ["13810017X001", "13810018X001"];
    var map_book    = ["16020001GX01", "16020600GX01"];
    var array_of_map = new Array();
    array_of_map[0] = map_mb;
    array_of_map[1] = map_memery;
    array_of_map[2] = map_ssd;
    array_of_map[3] = map_hdd;
    array_of_map[4] = map_power;
    array_of_map[5] = map_cdrom;
    array_of_map[6] = map_book;

    var str_query = "";
    for (var index = 0; index < array_of_map.length; index++)
    {
        for (var iner_index = 0; iner_index < array_of_map[index].length; iner_index++ )
        {
            str_query = str_query + "CurrentStock.cInvCode=\'" + array_of_map[index][iner_index] + "\'";

            if (index != array_of_map.length -1)
            {
                str_query += " or ";
            } else if ( (index == array_of_map.length -1) && (iner_index != array_of_map[index].length - 1))
            {
                str_query += " or ";
            }
        }
    }

    //document.write(str_query + "<br/>");

    var strQuery = "SELECT CurrentStock.cInvCode, Inventory.cInvStd , sum(CurrentStock.iQuantity)  from CurrentStock,Inventory " + 
                   "where ( " + str_query  + " )" +
                   " and CurrentStock.IQuantity > 0 and Inventory.cInvCode=CurrentStock.cInvCode  GROUP BY CurrentStock.cInvCode, Inventory.cInvStd";
    //document.write(strQuery + "<br/>");
    rs.Open(strQuery, objConnection);

    rs.MoveFirst();


    // ['主板', '内存', 'SSD', 'HDD', '电源', '光驱', '包材']
    var array_pt620q_inventory_status = [0,0,0,0,0,0,0];

    while (!rs.EOF) {
        //document.write(rs.fields(0) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
        //document.write(rs.fields(1) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
        //document.write(rs.fields(2) + "<br/>");
        
        var str_inv_code = String(rs.fields(0));
        var str_f2 = String(rs.fields(2));

        if (map_mb.indexOf(str_inv_code) != -1)
        {
            //document.write("主板1111" + "<br/>");
            array_pt620q_inventory_status[0] = array_pt620q_inventory_status[0] + parseInt(str_f2);

        }
        else if (map_memery.indexOf(str_inv_code) != -1)
        {
            //document.write("PT620K" + "<br/>");
            array_pt620q_inventory_status[1] = array_pt620q_inventory_status[1] + parseInt(str_f2);
        }
        else if (map_ssd.indexOf(str_inv_code) != -1)
        {
            array_pt620q_inventory_status[2] = array_pt620q_inventory_status[2] + parseInt(str_f2);
        }
        else if (map_hdd.indexOf(str_inv_code) != -1)
        {
            array_pt620q_inventory_status[3] = array_pt620q_inventory_status[3] + parseInt(str_f2);
        }
        else if (map_power.indexOf(str_inv_code) != -1)
        {
            array_pt620q_inventory_status[4] = array_pt620q_inventory_status[4] + parseInt(str_f2);
        }
        else if (map_cdrom.indexOf(str_inv_code) != -1)
        {
            array_pt620q_inventory_status[5] = array_pt620q_inventory_status[5] + parseInt(str_f2);
        }
        else if (map_book.indexOf(str_inv_code) != -1)
        {
            array_pt620q_inventory_status[6] = array_pt620q_inventory_status[6] + parseInt(str_f2);
        }
        else
        {
            ai_cnt = parseInt(str_f1);
        }


        rs.movenext();
    }
    objConnection.Close();





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
            data:['服务器','PC','AI'],
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
            label: {show:true},
            labelLine: {show:false},
            data:[
                {value: server_cnt, name:'服务器'},
                {value: pc_cnt, name:'PC'},
                {value: ai_cnt, name:'AI'},
            ]
        }]
    };


    var option1 = {
        
        xAxis: {
            type: 'category',
            data: ['主板', '内存', 'SSD', 'HDD', '电源', '光驱', '包材']
        },
    
        yAxis: {
            type: 'value'
        },

        series: [{
            data: array_pt620q_inventory_status,
            type: 'bar'
        }]
    };



    return option1;
}

function showInventoryStatus_Server() {


    /*** 从数据库获取 主料库存***/




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
            data:['平台','主板','SSD'],
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
  
                {value:4, name:'平台'},
                {value:2, name:'主板'},
                {value:2, name:'SSD'},
            ]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    //myChart.setOption(option);

    return option;
}



        
        
        


        









