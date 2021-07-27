function ShowHangye() {
         
  var option = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '1%',
        left: 'center', 
        textStyle: {
          color: 'rgba(255,255,255,.5)',
        
      }
    },
    series: [
        {
            name: '万元',
            type: 'pie',
            radius: ['40%', '60%'],
            center: ['50%', '55%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false,
            },
            data: [
                {value: 500, name: '医疗'},
                {value: 300, name: '交通'},
                {value: 900, name: '重要企业'},
                {value: 700, name: '运营商'},
                {value: 1000, name: '政府'},
                {value: 300, name: '教育'},
                {value: 500, name: '电子政务'},
            ]
        }
    ]
};
  return option;
}



      
      
      


      









