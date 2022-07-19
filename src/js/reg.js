document.addEventListener("DOMContentLoaded", function () {


    //----------------------------------------------index----------------------------------//
  
  
    //===================//==================//===CHART2================//====================//
  
    //setup
    const dataMychart2 = {
      labels: ['Andijon', 'Buxoro', 'Jizzax', 'Qashqadaryo', 'Qoraqalpog’iston', 'Navoiy', 'Namangan', 'Samarqand', 'Sirdaryo', 'Surxondaryo', 'Toshkent vil.', 'Toshkent', 'Fargona', 'Xorazm'],
      datasets: [{
        label: '',
        data: [258, 221, 185, 294, 80, 193, 243, 354, 165, 286, 373, 768, 267, 238],
        backgroundColor: '#00AE1C',
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
            x: {
              ticks: {
                font: {
                  size: 6
                }
              },beginAtZero: true
              },
              y: {
              ticks: {
                font: {
                  size: 6
                }
              },beginAtZero: true
              }
          }
        }
    }
    //render
    const myChart2 = new Chart(
      document.getElementById('myChart2'),
      configmyChart2
    );

      
    //===================//==================//======CHART1=============//====================//

    //setup
    const dataMychart1 = {
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
        const configmyChart1 = {
            type: 'bar',
            data: dataMychart1,
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
              x: {
                ticks: {
                  font: {
                    size: 6
                  }
                },beginAtZero: true
                },
                y: {
                ticks: {
                  font: {
                    size: 6
                  }
                },beginAtZero: true
                }
            }
           
            }
        }

    //render
    const myChart1 = new Chart(
        document.getElementById('myChart1'),
        configmyChart1
      );
  
  
//===================//==================//===CHART3================//====================//


  // setup
  const dataMychart3 = {
    labels: ['Andijon', 'Buxoro', 'Jizzax', 'Qashqadaryo', 'Qoraqalpog’iston', 'Navoiy', 'Namangan', 'Samarqand', 'Sirdaryo', 'Surxondaryo', 'Toshkent vil.', 'Toshkent', 'Fargona', 'Xorazm'],
    datasets: [{
    label: 'data-1',
    data: [3153, 2508, 2708, 2408, 4000, 2600, 2400, 3153, 2508, 2708, 2408, 4000, 2600, 2400],
    fill: false,
    backgroundColor: '#107CE0',
    borderColor: '#14B4F9',
    tension: 0.1,
  },
  {
    label: 'data-2',
    data: [1153, 508, 1708, 1408, 1000, 1600, 1400, 1153, 508, 1708, 1408, 1000, 1600, 1400,],
    fill: false,
    backgroundColor: '#EC7D17',
    borderColor: '#FF8A00',
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
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      }, 
      scales: {
        x: {
          ticks: {
            color: '#023AE9',
            font: {
              size: 6,
              weight: 'bold'
            }
          }
        },
        y: {
          ticks: {
            color: '#023AE9',
            font: {
              size: 7,
              weight: 'bold'
            }
          }
        }
        
      }
    }
  }
  // render init block
  
  const myChart3 = new Chart(
    document.getElementById('myChart3'),
    configmyChart3
  );




  //===================//==================//======CHART4=============//====================//
  // setup
  const dataMychart4 = {
    labels: ['', ''],
      datasets: [{
      label: '',
      data: [304359, 152957],
      backgroundColor: [
          '#107CE0',
          '#EC7D17'
      ],
      borderWidth: 1,
      datalabels: {
      color: '#2B00D1',
      font: {
        weight: '500',
        size: 13,
      },
      anchor: 'end',
      align: 'top',
      offset: 10,
    }
  }]
  }
  // config
  const configmyChart4 = {
    type: 'doughnut',
    data: dataMychart4,
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
        scales: {
          y: {
          display: false,
            ticks: {
              display: false,
            },
            grid: {
              display: false
            }
          },
          x: {
          ticks: {
            display: false,
          },
            grid: {
              display: false
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: 80,
        rotation: 0,
        circumference: 180,
        cutout: '70%',
    }
  }
  //render
  const myChart4 = new Chart(
    document.getElementById('myChart4'),
    configmyChart4
  );

  //===================//==================//======CHART41=============//====================//
  
  //render
  const myChart41 = new Chart(
    document.getElementById('myChart41'),
    configmyChart4
  );

   //===================//==================//======CHART42=============//====================//
  
  //render
  const myChart42 = new Chart(
    document.getElementById('myChart42'),
    configmyChart4
  );


  
  
  });