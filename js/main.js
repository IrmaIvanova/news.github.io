jQuery(document).ready(function(){
	// preloader
	setTimeout(function(){
		jQuery(".preloader").addClass("step-1");
		setTimeout(function(){
			jQuery(".preloader").addClass("step-2");
			setTimeout(function(){
				jQuery(".preloader").hide();
			},1000);;
		},700);
	},200);

	// scroll
	jQuery(window).on("scroll",function(){
		fscroll()
		fixed_el();
		top_for_inner();
	});
	fscroll()
	fixed_el();
	top_for_inner();
	function fscroll(){
		if (jQuery("header").hasClass("scroll_only")) {
			jQuery("header").addClass("scroll");
		}
		else if (jQuery(window).scrollTop() > 0)
			jQuery("header").addClass("scroll");
		else
			jQuery("header").removeClass("scroll");
	};
	function fixed_el(){
		if ( jQuery(window).scrollTop() + window.innerHeight + 20 > jQuery("footer").offset().top) {
			if ( jQuery(".sctn-pagi").length > 0 ) {
				jQuery(".sctn-pagi").removeClass("fixed");
			}
			if ( jQuery(".sctn-3 .inner-box").length > 0 ) {
				jQuery(".sctn-3 .inner-box").removeClass("fixed");
			}
		}
		else {
			if ( jQuery(".sctn-pagi").length > 0 ) {
				jQuery(".sctn-pagi").addClass("fixed");
			}
			if ( jQuery(".sctn-3 .inner-box").length > 0 ) {
				jQuery(".sctn-3 .inner-box").addClass("fixed");
			}
		}
	};
	function top_for_inner(){
		var scrl = jQuery(window).scrollTop();
		if (scrl > 74) {
			jQuery(".top_for_inner").addClass("active");
		}
		else {
			jQuery(".top_for_inner").removeClass("active");
		}
		var prcnt = 100 / (jQuery("html").height() - window.innerHeight) * scrl;
		jQuery(".top_for_inner .scrl").css("width",prcnt+"%");
	};


	// search
	jQuery(document).on("focus","header .search input",function(){
		jQuery(this).parent().addClass("focus");
	});
	jQuery(document).on("blur","header .search input",function(){
		jQuery(this).parent().removeClass("focus");
	});

	// home-slider
	if (jQuery('.home-slider').length != 0) {
		jQuery('.home-slider').slick({
			arrows: true,
	 		dots: false,
		});
	}
	// slider-bot
	if (jQuery('.slider-bot').length != 0) {
		jQuery('.slider-bot').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			centerMode: true,
			centerPadding: '100px',
			focusOnSelect: true,
			arrows: true,
	 		dots: false,
	 		adaptiveHeight: true,
	 		responsive: [{
			  breakpoint: 1200,
			  settings: {
			  	slidesToShow: 3,
			  }
			},{
			  breakpoint: 1000,
			  settings: {
			  	slidesToShow: 2,
				centerPadding: '50px',
			  }
			},{
			  breakpoint: 769,
			  settings: {
			  	slidesToShow: 1,
				centerPadding: '10%',
			  }
			}]
		});
	}

	// textarea
	jQuery(document).on("focus","textarea",function(){
		jQuery(this).parent().find(".overtxt").hide();
	})
	jQuery(document).on("blur","textarea",function(){
		if (jQuery(this).val() == "") {
			jQuery(this).parent().find(".overtxt").show();
		}
		else {
			jQuery(this).parent().find(".overtxt").hide();
		}
	})

	// val input
	jQuery(document).on("focus",".val input",function(){
		jQuery(this).parent().removeClass("active");
	});
	jQuery(document).on("blur",".val input",function(){
		if (jQuery(this).val() != "") {
			jQuery(this).parent().addClass("active");
		}
		else {
			jQuery(this).parent().removeClass("active");
		}
	});

	// file
	jQuery(document).on("change",".file input",function(){
		var val = jQuery(this).val();
		if (val == "") {
			jQuery(this).closest(".file").find(".file_btn").html("Choose file");
			jQuery(this).closest(".file").removeClass("active");
		}
		else {
			jQuery(this).closest(".file").find(".file_btn").html(val);
			jQuery(this).closest(".file").addClass("active");
		}
	});



	// overlay
	jQuery(document).on("click",".overlay",function(){
		jQuery(".overlay").removeClass("active");
		jQuery("header .brgr").removeClass("active");
		jQuery(".header-block").removeClass("active");
	});
	// brgr
	jQuery(document).on("click",".brgr",function(){
		if (jQuery("header .brgr").hasClass("active")) {
			jQuery("header .brgr").removeClass("active");
			jQuery(".overlay").removeClass("active");
			jQuery(".header-block").removeClass("active");
		}
		else {
			jQuery("header .brgr").addClass("active");
			jQuery(".overlay").addClass("active");
			jQuery(".header-block").addClass("active");
		}
	});
});