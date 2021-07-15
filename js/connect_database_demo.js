
var objConnection = new ActiveXObject("ADODB.Connection");
var strdsn = "driver={sql server};server=192.168.83.253;uid=sa;password=11111111;database=r9-data-076";    
var ret = objConnection.Open(strdsn);

var rs = new ActiveXObject("ADODB.Recordset");
var strQuery = "select _mom_order_doc_no, _quantity, _day from __mplan_product_master_plan";
rs.Open(strQuery, objConnection);
rs.MoveFirst();
while (!rs.EOF) {
    document.write(rs.fields(0) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
    document.write(rs.fields(1) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
    document.write(rs.fields(2) + "<br/>");
    rs.movenext();
}
objConnection.Close();