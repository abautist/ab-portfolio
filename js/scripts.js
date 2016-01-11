
// radar favorite coding languages
var radarData = {
    labels: ["SASS", "JavaScript", "Express", "jQuery", "Ruby on Rails", "PostgreSQL", "MongoDB", "AngularJS"],
    datasets: [
        {
            label: "Top Code Skills",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [90, 85, 90, 85, 85, 70, 75, 65]
        }
    ]
};

// radar chart personal interests
var personalData = {
    labels: ["Farming", "Yoga", "Cycling", "Premier League", "Cooking", "Film", "Travel"],
    datasets: [
        {
            label: "Interests",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [90, 60, 85, 80, 70, 85, 95]
        }
    ]
};

window.onload = function() {
	window.myRadarChart = new Chart(document.getElementById("myChart").getContext("2d")).Radar(radarData, {
		responsive: true
	});

    window.myPersonalRadarChart = new Chart(document.getElementById("secChart").getContext("2d")).Radar(personalData, {
        responsive: true
    });

}

$(function(){
  $(document.getElementById("typed")).typed({
    strings: ["The Internet and developer tools are more accessible than ever before.^300<br /> It's truly an exciting time to be working in the tech industry!"],
    typeSpeed: 10,
    contentType: "html",
    showCursor: false
  });

//Reference: Learning jQuery 10/20/07 post
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


});









