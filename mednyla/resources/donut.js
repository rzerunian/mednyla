  var ctx = document.getElementById('donutChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: ['Austa', 'Particular'],
          datasets: [{
              label: 'Quantity',
              data: [50, 75],
              backgroundColor: [
                  '#2A0944',
                  '#A10035'
              ],
              borderColor: [
                  'rgba(0, 0, 0, 0)',
                  'rgba(0, 0, 0, 0)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          cutoutPercentage: 60,
          legend: {
              position: 'bottom',
              labels: {
                  boxWidth: 30,
                  fontColor: '#fff',
              },
          },
          tooltips: {
              callbacks: {
                  label: function(tooltipItem, data) {
                      var dataset = data.datasets[tooltipItem.datasetIndex];
                      var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                          return previousValue + currentValue;
                      });
                      var currentValue = dataset.data[tooltipItem.index];
                      var precentage = Math.floor(((currentValue/total) * 100)+0.5);
                      return precentage + "%";
                  }
              }
          },
          elements: {
              center: {
                  text: '65%',
                  color: '#fff',
                  fontStyle: 'Helvetica',
                  sidePadding: 15
              }
          },
      }
  });