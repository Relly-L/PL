$(document).ready(function(){
	
	$('.header').effect('slide', 1000);

	$(".panel-heading").hover(
		function () {
		    $(this).addClass("class-for-background-interests",500);
	    },
	    function () {
	 	    $(this).removeClass("class-for-background-interests",300);
    	}
	);

	$(".footer ul a").hover(
		function () {
		    $(this).addClass("link-hover",500);
	    },
	    function () {
	 	    $(this).removeClass("link-hover",300);
    	}
	);

	$(".thumbnail").hover(
		function () {
		    $(this).addClass("thumbnail-hover",400);
	    },
	    function () {
	 	    $(this).removeClass("thumbnail-hover",200);
    	}
	);


	$('.content1, content2').on('appear',function(){   // разобраться и заставить заработать
		$(this).fadeOut('slow');
	});

});
