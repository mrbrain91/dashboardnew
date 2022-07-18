


      //===================//==================//======CHART4=============//====================//
    
    
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