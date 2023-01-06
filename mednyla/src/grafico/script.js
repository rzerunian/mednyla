/* Scripts for css grid dashboard */

$(document).ready(() => {
  renderChart();
});

// Draw the chart
function renderChart() {
  const chart = AmCharts.makeChart( "chartdiv", {
    "type": "serial",
    "theme": "light",
    "dataProvider": [ {
      "mês": "Jan",
      "visits": 215
    }, {
      "mês": "fev",
      "visits": 385
    }, {
      "mês": "Mar",
      "visits": 463
    }, {
      "mês": "Abr",
      "visits": 520
    }, {
      "mês": "Mai",
      "visits": 580
    }, {
      "mês": "Jun",
      "visits": 512
    }, {
      "mês": "Jul",
      "visits": 620
    }, {
      "mês": "Ago",
      "visits": 711
    }, {
      "mês": "Set",
      "visits": 980
    }, {
      "mês": "Out",
      "visits": 1050
    },
    {
      "mês": "Nov",
      "visits": 1150
    },{
      "mês": "Dez",
      "visits": 1200
    } ],
    "valueAxes": [ {
      "gridColor": "#FFFFFF",
      "gridAlpha": 0.2,
      "dashLength": 0
    } ],
    "gridAboveGraphs": true,
    "startDuration": 1,
    "graphs": [ {
      "balloonText": "[[category]]: <b>[[value]]</b>",
      "fillAlphas": 1,
      "lineAlpha": 0.2,
      "type": "column",
      "valueField": "visits"
    } ],
    "chartCursor": {
      "categoryBalloonEnabled": false,
      "cursorAlpha": 0,
      "zoomable": false
    },
    "categoryField": "mês",
    "categoryAxis": {
      "gridPosition": "start",
      "gridAlpha": 0,
      "tickPosition": "start",
      "tickLength": 20
    },
    "export": {
      "enabled": false
    }
  });
}