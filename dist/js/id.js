
document.addEventListener("DOMContentLoaded", function () { 

//===================//==================//======CHART1=============//====================//
    
  // setup myChart3
  const dataMychart1 = {
    labels: ['', ''],
      datasets: [{
      label: 'HUQUQBUZARLIKLAR',
      data: [60, 40],
      backgroundColor: [
          '#006BCD ',
          // '#2FBD2C'
          'transparent'
      ],
      datalabels: {
        color: '#2B00D1',
        font: {
          weight: '500',
          size: 8,
        }
      },
      cutout: "50%",
      borderRadius: 30,
  },
  {
    label: 'HUQUQBUZARLIKLAR',
    data: [26, 74],
    backgroundColor: [
        '#003A92',
        'transparent'
    ],
    datalabels: {
      color: '#2B00D1',
      font: {
        weight: '500',
        size: 8,
      }
    },
    cutout: "50%",
    borderRadius: 20,
  },
  {
    label: '',
    data: [24, 76],
    backgroundColor: [
        '#AB7B00',
        // '#2FBD2C'
        'transparent'
    ],
    datalabels: {
      color: '#2B00D1',
      font: {
        weight: '500',
        size: 8,
      }
    },
    cutout: "50%",
    borderRadius: 20,
  },
  {
    label: 'HUQUQBUZARLIKLAR',
    data: [30, 70],
    backgroundColor: [
        '#3F0090',
        // '#2FBD2C'
        'transparent'
    ],
    datalabels: {
      color: '#2B00D1',
      font: {
        weight: '500',
        size: 8,
      }
    },
    cutout: "50%",
    borderRadius: 20
  }]
  }
  // config
  const configmyChart1 = {
    type: 'doughnut',
    data: dataMychart1,
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
      responsive: true,
      maintainAspectRatio: false
    }
  }
  //render init block
  const myChart1 = new Chart(
    document.getElementById('myChart1'),
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
    labels: [0, 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba', 'Yakshanba'],
    datasets: [{
    label: 'data-1',
    data: [0, 3153, 2508, 2708, 2408, 4000, 2600, 2400],
    fill: false,
    borderColor: '#14B4F9',
    tension: 0.1,
  },
  {
    label: 'data-2',
    data: [0, 1153, 508, 1708, 1408, 1000, 1600, 1400],
    fill: false,
    borderColor: '#FF8A00',
    borderDash: [5],
    tension: 0.1
  },
  {
    label: 'data-3',
    data: [0, 853, 1508, 408, 308, 900, 600, 1400],
    fill: false,
    borderColor: '#6F98D6',
    borderDash: [5],
    tension: 0.1
  }
  ]
  }
  // config
  const configmyChart3 = {
    type: 'line',
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
  


//===================//==================//===CHART4================//====================//


  //myChart
  // setup
  const dataMychart4 = {
    labels: ['Andijon', 'Buxoro', 'Jizzax', 'Qashqadaryo', 'Qoraqalpog’iston', 'Navoiy', 'Namangan', 'Samarqand', 'Sirdaryo', 'Surxondaryo', 'Toshkent vil.', 'Toshkent', 'Fargona', 'Xorazm'],
    datasets: [{
      label: '',
      data: [258, 221, 185, 294, 80, 193, 243, 354, 165, 286, 373, 268, 267, 238],
      backgroundColor: '#00E0FF',
      datalabels: {
        color: '#00E0FF',
        anchor: 'end',
        align: 'right',
        offset: 2
      }
    },
    {
      label: '',
      data: [58, 21, 85, 94, 35, 55, 43, 54, 34, 99, 73, 68, 67,  38],
      backgroundColor: '#6F98D6',
      datalabels: {
        color: '#2570D6',
        anchor: 'end',
        align: 'right',
        offset: 2
      }
    },
    {
      label: '',
      data: [28, 11, 45, 44, 25, 25, 23, 24, 14, 9, 73, 68, 67,  38],
      backgroundColor: '#FFA800',
      datalabels: {
        color: '#2570D6',
        anchor: 'end',
        align: 'right',
        offset: 2
      }
    },
    {
      label: '',
      data: [18, 6, 25, 22, 14, 12, 13, 14, 7, 5, 23, 25, 24,  19],
      backgroundColor: '#A10DD6',
      datalabels: {
        color: '#2570D6',
        anchor: 'end',
        align: 'right',
        offset: 2
      }
    }
  ]
  }
  // config
  const configmyChart4 = {
      type: 'bar',
      data: dataMychart4,
      // plugins: [ChartDataLabels],
      options: {
          plugins: {
            legend: {
              display: false
            }
          },
          tooltips: {
            callbacks: {
              label: function(tooltipItem) {
                return tooltipItem.yLabel;
            }
          }
        },
        indexAxis: 'y',
        scales: {
          x: {
            stacked: true
          },  
          y: {
            beginAtZero: true,
            stacked: true
          }
        }
      }
  }
  // render init block
    
    
  const myChart4 = new Chart(
    document.getElementById('myChart4'),
    configmyChart4
  );
      
    




});