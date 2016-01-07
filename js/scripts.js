var data = {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    datasets: [
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 96, 27, 100]
        }
    ]
};

window.onload = function() {
	window.myRadarChart = new Chart(document.getElementById("myChart").getContext("2d")).Radar(data, {
		responsive: true
	});
}

$(function(){
  $(document.getElementById("typed")).typed({
    strings: ["It's an exciting time to be working in the technology industry.",
              "The Internet has become more accessible than ever before."],
    typeSpeed: 20
  });
});







