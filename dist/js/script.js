

//map of Uzbekistan

(async () => {

  const topology = await fetch(
      'https://code.highcharts.com/mapdata/countries/uz/uz-all.topo.json'
  ).then(response => response.json());

  // Prepare demo data. The data is joined to map using value of 'hc-key'
  // property by default. See API docs for 'joinBy' for more info on linking
  // data and map.
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

// end map

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
    };

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
    };

    // render init block
    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    );




    //2nd chart


    const ctx = document.getElementById('myChart2').getContext('2d');
    const myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {
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
        },
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
    });

       //3nd chart


       const ctx3 = document.getElementById('myChart3').getContext('2d');
       const myChart3 = new Chart(ctx3, {
           type: 'doughnut',
           data: {
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
           },
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
       });