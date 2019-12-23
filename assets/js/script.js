
	$(document).on("scroll", function(){
		if
      ($(document).scrollTop() > 26){
		  $("#banner").addClass("shrink");
		}
		else
		{
			$("#banner").removeClass("shrink");
		}
	});