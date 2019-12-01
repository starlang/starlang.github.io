//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "01 Jan 2020 00:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	
