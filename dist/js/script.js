
//===================//==================//===MAP================//====================//

(async () => {
  const topology = await fetch(
      'https://code.highcharts.com/mapdata/countries/uz/uz-all.topo.json'
  ).then(response => response.json()); 
  const data = [
      ['uz-fa', 10], ['uz-tk', 11], ['uz-an', 12], ['uz-ng', 13],
      ['uz-ji', 14], ['uz-si', 15], ['uz-ta', 16], ['uz-bu', 17],
      ['uz-kh', 18], ['uz-qr', 19], ['uz-nw', 20], ['uz-sa', 21],
      ['uz-qa', 22], ['uz-su', 23]
  ];
  // Create the chart
  Highcharts.mapChart('map', {
      chart: {
          map: topology
      },

      title: {
          text: ''
      },

      subtitle: {
          text: ''
      },
      // mapNavigation: {
      //     enabled: true,
      //     buttonOptions: {
      //         verticalAlign: 'bottom'
      //     }
      // },

      // colorAxis: {
      //     min: 0
      // },

      series: [{
          data: data,
          name: '',
          states: {
              hover: {
                  color: '#001D84'
              }
          }
          // dataLabels: {
          //     enabled: false,
          //     format: '{point.name}'
          // }
      }]
  });

})();


//===================//==================//===CHART================//====================//



//myChart
// setup
const data = {
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
// config
const config = {
    type: 'bar',
    data,
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
// render init block
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);


//===================//==================//===CHART2================//====================//


//myChart2
// setup
const dataChart2 = {
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
const configChart2 = {
  type: 'bar',
  data: dataChart2,
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
const myChart2 = new Chart(
  document.getElementById('myChart2'),
  configChart2
);

//===================//==================//======CHART3=============//====================//


// myChart3
// setup myChart3
const dataMychart3 = {
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
const configChart3 = {
  type: 'doughnut',
  data: dataMychart3,
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
const myChart3 = new Chart(
  document.getElementById('myChart3'),
  configChart3
);

//===================//==================//======CHART4=============//====================//


// myChart4
// setup myChart4
const dataMychart4 = {
  labels: ['VAQTINCHA', 'DOIMIY'],
    datasets: [{
    label: 'HUQUQBUZARLIKLAR',
    data: [354359, 102957],
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
    offset: 10
  }
}]
}
// config
const configChart4 = {
  type: 'doughnut',
  data: dataMychart4,
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
      rotation: -90,
      circumference: 180
  }
}
//render init block
const myChart4 = new Chart(
  document.getElementById('myChart4'),
  configChart4
);

