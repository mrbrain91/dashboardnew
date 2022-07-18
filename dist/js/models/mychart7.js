export default function mychart7() {
    //===================//==================//===myCjart7================//====================// 
  
  //setup
  const dataMychart7 = {
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
  const configMyChart7 = {
  type: 'doughnut',
  data: dataMychart7,
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
  },
  };
  
  // render init block
  const myChart7 = new Chart(
  document.getElementById('myChart7'),
  configMyChart7
  );


    
  
}
