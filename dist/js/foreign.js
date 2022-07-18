document.addEventListener("DOMContentLoaded", function () { 
  

//===================//==================//======CHART1=============//====================//

    //setup
    const dataMychart1 = {
        labels: ['noLabel'],
        datasets: [
        {
            label: 'Dataset 1',
            data: [100],
            backgroundColor: '#29C110',
            cutout: '70%'
        },
        {
            label: 'Dataset 2',
            data: [92, 5, 2, 1],
            backgroundColor: ['#197C9B', '#1890FF', '#FF900D', '#FFE70B']
        },
        ]
    };
    //config 
    const configmyChart1 = {
        type: 'doughnut',
        data: dataMychart1,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: false,
                    text: 'Chart.js Doughnut Chart'
                }
            }
        }
    };
    
    // render init block
    const myChart1 = new Chart(
    document.getElementById('myChart1'),
    configmyChart1
    );


//===================//==================//======CHART1-2=============//====================//

    // render init block
    const myChart12 = new Chart(
        document.getElementById('myChart12'),
        configmyChart1
    );
    

//===================//==================//===CHART2================//====================//

  //setup
  const dataMychart2 = {
    labels: ['Andijon', 'Buxoro', 'Jizzax', 'Qashqadaryo', 'Qoraqalpog’iston', 'Navoiy', 'Namangan', 'Samarqand', 'Sirdaryo', 'Surxondaryo', 'Toshkent vil.', 'Toshkent', 'Fargona', 'Xorazm'],
    datasets: [{
      label: '',
      data: [258, 221, 185, 294, 80, 193, 243, 354, 165, 286, 373, 768, 267, 238],
      backgroundColor: '#2570D6',
      datalabels: {
        color: '#2570D6',
        anchor: 'end',
        align: 'right',
        offset: 2
      }
    }]
  }
  //config
  const configmyChart2 = {
      type: 'bar',
      data: dataMychart2,
      plugins: [ChartDataLabels],
      options: {
          plugins: {
            legend: {
              display: false
            }
          },
          tooltips: {
            callbacks: {
              label: function(tooltipItem) {
            console.log(tooltipItem)
                return tooltipItem.yLabel;
            }
          }
        },
        indexAxis: 'y',
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
  }
  //render
  const myChart2 = new Chart(
    document.getElementById('myChart2'),
    configmyChart2
);


//===================//==================//===CHART3================//====================//


  // setup
  const dataMychart3 = {
    labels: ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba', 'Yakshanba'],
    datasets: [{
    label: 'data-1',
    data: [3153, 2508, 2708, 2408, 4000, 2600, 2400],
    fill: false,
    backgroundColor: '#29C110',
    borderRadius: '3',
    borderColor: '#14B4F9',
    tension: 0.1,
  },
  {
    label: 'data-2',
    data: [1153, 508, 1708, 1408, 1000, 1600, 1400],
    fill: false,
    backgroundColor: 'rgba(255, 0, 0, 0.87)',
    borderColor: '#FF8A00',
    borderRadius: '3',
    tension: 0.1
  },
  {
    label: 'data-3',
    data: [853, 1508, 408, 308, 900, 600, 1400],
    fill: false,
    backgroundColor: 'rgba(16, 108, 193, 0.87)',
    borderColor: '#6F98D6',
    borderRadius: '3',
    tension: 0.1
  }
  ]
  }
  // config
  const configmyChart3 = {
    type: 'bar',
    data: dataMychart3,
    // plugins: [ChartDataLabels],
    options: {
      plugins: {
        legend: {
          display: false
        }
      }
    }
  }
  // render init block
  
  const myChart3 = new Chart(
    document.getElementById('myChart3'),
    configmyChart3
  );
  


});