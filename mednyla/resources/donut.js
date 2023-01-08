function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

	var pacientes = [
		{
            value: 12,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "Austa"
		},
		{
            value: 28,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Particular"
		},
	];
	options = {
		segmentShowStroke : true,
        segmentStrokeColor : "rgba(0,0,0,0)",
        segmentStrokeWidth : 1,
        percentageInnerCutout : 50, 
		animationSteps : 100,
		animationEasing : "easeOutBounce",
		animateRotate : true,
		animateScale : false,
		responsive: true,
		maintainAspectRatio: true,
		showScale: true,
		animateScale: true,
        };
    
    var donutEl = document.getElementById("donut").getContext("2d");
    var donut = new Chart(donutEl).Doughnut(pacientes, options)
    
    var legendHTML = '';

    pacientes.forEach(paciente => {
        legendHTML += '<ul>';
        legendHTML += `${paciente.label}` + ": " + `${paciente.value}`;
        legendHTML += '</ul>';
      });
      document.getElementById('legend').innerHTML = '<ul>' + legendHTML + '</ul>';
    