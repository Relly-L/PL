$(document).ready(function(){
	
	$('.header').effect('slide', 1000);

	$(".panel-heading").hover(
		function () {
		    $(this).addClass("class-for-background-interests",300);
	    },
	    function () {
	 	   $(this).removeClass("class-for-background-interests",300);
    	}
);
	
});
