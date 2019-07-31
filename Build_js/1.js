document.addEventListener("DOMContentLoaded",function(){
	//code o day
	//calling Brand Crousel
	$(".main-banner").owlCarousel({
		loop:true,
		margin:5,
		responsiveClass:true,
		slideSpeed : 2000,
		smartSpeed:2500,
		nav: true,
		// autoplay: true,
		// autoplayTimeout:5000,
		// responsiveRefreshRate : 200,
		dots:false,
		rewind:true,
		responsive:{
			0:{
				items:1,
				nav:false,
				
			},
			600:{
				items:1,
				nav:false,
				
			},
			1000:{
				items:1,
				nav:false,
				
				loop:true
			}
		}
	});		
},false)