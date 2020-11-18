// initialise
$(document).ready(function() {
    
	// init timer
	$("#timer").TimeCircles({
		"animation": "smooth",				// "smooth", "ticks"
		"bg_width": 1.2,
		"fg_width": 0.1,
		"direction": "Clockwise",				// "Clockwise", "Counter-clockwise", "Both"
		"circle_bg_color": "#60686F",
		"time": {
			"Days": {
				"text": "Days",
				"color": "#FFCC66",
				"show": true
			},
			"Hours": {
				"text": "Hours",
				"color": "#99CCFF",
				"show": true
			},
			"Minutes": {
				"text": "Minutes",
				"color": "#BBFFBB",
				"show": true
			},
			"Seconds": {
				"text": "Seconds",
				"color": "#FF9999",
				"show": true
			}
		},
		start: false
	});
	
	// define ending behaviour
	$("#timer").TimeCircles().end().stop(); 
	
	// init buttons start
	$("#start").click(function() {
		$("#timer").TimeCircles().start();
	});
	
	// init buttons stop
	$("#stop").click(function() {
		$("#timer").TimeCircles().stop();
	});
	
	// init buttons reset
	$("#reset").click(function() {
		$("#timer").TimeCircles().restart();
		$("#timer").TimeCircles().stop();
	});

});

// refresh
$(window).resize(function() {
    $("#timer").TimeCircles().rebuild();
});


