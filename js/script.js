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

	// переключатель день-ночь
	$(".power-switch").click(function(){
		$("body").toggleClass('night-style-body', 200);
		$("blockquote").toggleClass("nigth-style-blockquote",200);
		$(".content1, .content2, .humor").toggleClass("night-style-content",200);
		$(".carousel-photos-pluto").toggleClass("night-style-carousel-photos-pluto",200);
		$(".interests").toggleClass("night-style-interests",200);
		$(".footer").toggleClass("footer-night-style",200);
		$(".middle-photos").toggleClass("night-style-middle-photos",200);
	});

	// $('.content1, content2').on('appear',function(){   // разобраться и заставить заработать
	// 	$(this).fadeOut('slow');
	// });

});
