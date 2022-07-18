//===================//==================//======CHART1=============//====================//

    //setup
    const dataMychart1 = {
      labels: ['noLabel'],
      datasets: [
      {
          label: 'Dataset 1',
          data: [100],
          backgroundColor: '#42D1FF',
          cutout: '70%'
      },
      {
          label: 'Dataset 2',
          data: [92, 5, 2, 1],
          backgroundColor: ['#D98F00', '#4F9D00', '#FF900D', '#FFE70B'],
          cutout: '70%'
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

  // render init block
  const myChart12 = new Chart(
    document.getElementById('myChart12'),
    configmyChart1
    );

//===================//==================//===CHART3================//====================//


  // setup
  const dataMychart3 = {
    labels: [0, '2016', '2017', '2018', '2019', '2020', '2021'],
    datasets: [{
    label: 'data-2',
    data: [0, 1153, 508, 708, 1408, 1000, 1600],
    fill: false,
    borderColor: '#00DC80',
    tension: 0.1
  },
  {
    label: 'data-3',
    data: [0, 853, 308, 408, 308, 900, 600],
    fill: false,
    borderColor: '#FF0000',
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
  
