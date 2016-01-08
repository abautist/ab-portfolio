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
    strings: ["Access to the Internet and developer tools continues to grow.<br />The potential for more people to create great products has expanded.^300 <br /> It's truly an exciting time to be working in the tech industry!"],
    typeSpeed: 10,
    contentType: "html",
    showCursor: false,
  });
});









