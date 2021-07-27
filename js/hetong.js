function ShowHetong() {
         
  var option = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '5%',
        left: 'center', 
        textStyle: {
          color: 'rgba(255,255,255,.5)',
        
      }
    },
    series: [
        {
            name: '万元',
            type: 'pie',
            radius: ['30%', '70%'],
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
                {value: 700, name: 'PC'},
                {value: 300, name: '服务器'},
            ]
        }
    ]
};
  return option;
}



      
      
      


      









