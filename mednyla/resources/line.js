var ctx = document.getElementById('lineChart').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      datasets: [{
        label: 'Consultas',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        borderColor: 'rgba(255, 255, 255, 1)',
        data: [0, 10, 5, 2, 20, 30, 45, 60, 10, 20, 30, 40]
      }]
    },

    // Configuration options go here
    options: {
      legend: {
        display: false
      },
      title: {
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: "white"
          },
          gridLines: {
            color: "#ff000000"
          }
        }],
        xAxes: [{
          ticks: {
            fontColor: "white"
          },
          gridLines: {
            color: "#fff00000"
          }
        }]
      }
    }
  });