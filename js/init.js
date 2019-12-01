//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "31 dec 2019 24:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	