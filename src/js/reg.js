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
                y: {
                beginAtZero: true
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
      labels: ['', ''],
      datasets: [{
          label: 'HUQUQBUZARLIKLAR',
          data: [64706, 4084],
      backgroundColor: [
          '#2570D6',
          '#2FBD2C'
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
        offset: -2
        }
      }]
    }
    // config
    const configmyChart3 = {
      type: 'bar',
      data: dataMychart3,
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
          scales: {
            y: {
              ticks: {
                display: false,
              },
              grid: {
                display: false
              }
            },
            x: {
              grid: {
                display: false
              }
            }
          },
          responsive: true,
          maintainAspectRatio: false
      }
    }
    // render init block
    const myChart3 = new Chart(
      document.getElementById('myChart3'),
      configmyChart3
    );
  
  });