$(document).ready(function(){
	
	$('.header').effect('slide', 1000);

	$(".panel-heading").hover(
		function () {
		    $(this).addClass("class-for-background-interests",400);
	    },
	    function () {
	 	    $(this).removeClass("class-for-background-interests",200);
    	}
	);
});
