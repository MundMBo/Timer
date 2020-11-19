// initialise
$(document).ready(function() {
    
	// init timer
	$.fn.initTimer();
	
	// init buttons start
	$("#start").click(function() {
		$(".timer").TimeCircles().start();
	});
	
	// init buttons stop
	$("#stop").click(function() {
		$(".timer").TimeCircles().stop();
	});
	
	// init buttons reset
	$("#reset").click(function() {
		$(".timer").TimeCircles().restart();
		$(".timer").TimeCircles().stop();
	});
	
	// init buttons increment
	$(".btn-decrement").click(function() {
		var obj = $(this).closest(".input-group").children("input");
		var input = obj.val();
		if (input == "") {input = 0;}
		input = parseInt(input);
		input = input - 1;
		obj.val(input);
	});
	
	// init buttons decrement
	$(".btn-increment").click(function() {
		var obj = $(this).closest(".input-group").children("input");
		var input = obj.val();
		if (input == "") {input = 0;}
		input = parseInt(input);
		input = input + 1;
		obj.val(input);
	});
	
	// init button set duration
	$("#setDuration").click(function() {
		$(".timer").TimeCircles().destroy();
		$(".timer").removeAttr("data-date");
		$(".timer").removeAttr("data-timer");
		$(".config").attr("data-timer-new", 0);
		$(this).closest("form").find("input").each(function () {
			var current = parseInt($(".config").attr("data-timer-new"));
			var value = parseInt($(this).val());
			var factor = parseInt($(this).attr("data-factor-to-seconds"));
			if (value > 0 && factor > 0) {
				$(".config").attr("data-timer-new",  current + value * factor);
			}
		});
		$(".timer").attr("data-timer", $(".config").attr("data-timer-new"));
		$(".config").removeAttr("data-timer-new");
		$.fn.initTimer();
	});
	
	// init button set end time
	$("#setEndTime").click(function() {
		$(".timer").TimeCircles().destroy();
		$(".timer").removeAttr("data-date");
		$(".timer").removeAttr("data-timer");
		$(".config").attr("data-date-new", 0);
		$(this).closest("form").find("input").each(function () {
			var current = parseInt($(".config").attr("data-date-new"));
			var value = parseInt($(this).val());
			// required output "2014-01-01 00:00:00"
		});
		$(".timer").attr("data-date", $(".config").attr("data-date-new"));
		$(".config").removeAttr("data-date-new");
		$.fn.initTimer();
	});
});

// refresh
$(window).resize(function() {
    $(".timer").TimeCircles().rebuild();
});

// init timer function
$.fn.initTimer = function(){ 
	$(".timer").TimeCircles({
		"animation": "smooth",					// "smooth", "ticks"
		"count_past_zero": false,
		"bg_width": 1.2,
		"fg_width": 0.1,
		"circle_bg_color": "#60686F",
		"direction": "Clockwise",				// "Clockwise", "Counter-clockwise", "Both"
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
		"start": false
	});
}
