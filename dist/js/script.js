// Chart.defaults.scale.ticks.display = false;

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