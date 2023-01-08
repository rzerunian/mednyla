function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

const invoicingData = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200];
const expensesData = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600];

    
    var barEl = document.getElementById("overBar");
    var donut = new Chart(barEl, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
          datasets: [
            {
              label: 'Receitas',
              data: invoicingData,
              backgroundColor: '#2A0944'
            },
            {
              label: 'Despesas',
              data: expensesData,
              backgroundColor: '#A10035'
            }
          ]
        },
        options: {
          legend: {
            position: 'bottom',
            labels: {
                fontColor: '#fff',
                padding: 10
            },
          },
          scales: {
            xAxes: [{
                stacked: true,
                gridLines: {
                    color: '#fff00000'
                },
                ticks: {
                    fontColor: '#fff'
                  }
            }],
            yAxes: [{
                stacked: true,
                gridLines: {
                    color: '#fff00000'
                },
                ticks: {
                    fontColor: '#fff',
                    callback: function(value) {
                        return 'R$' + value + ',00';
                    }
                }
            }],
          }
        }
      });