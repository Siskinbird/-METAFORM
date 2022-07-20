
new Swiper('.swiper', {
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	loop: true,
	loopedSlides: 1,
	spaceBetween: 300,
	speed: 500,
	simulateTouch: false,
	allowTouchMove: false,
  });


jQuery(document).ready(function () {
     $('.slider').slick({
		 dots: true,
		 autoplay: true,
		 speed: 1000,
		 adaptiveHeight: false,
		 variableWidth: true,
		 slidesToShow: 1,
		 centerMode: true,
		 responsive: [{
			breakpoint: 1025,
			settings: {
			  arrows: true,
			  centerMode: true,
			  slidesToScroll: 1
			}
		  }]		
	 });
     $("#phone").mask("+7 (999) 999-9999");
	 

//burger 
	 $(document).ready(function() {
		 $('.header__burger').click(function(event) {
			 $('.header__burger,.header__menu').toggleClass('active');
			 $('body').toggleClass('lock');
		 });
	 });



	 
	 $(document).ready(function() { 
		var button = $('#button-up');	
		$(window).scroll (function () {
		  if ($(this).scrollTop () > 300) {
			button.fadeIn();
		  } else {
			button.fadeOut();
		  }
	  });	 
	  button.on('click', function(){
	  $('body, html').animate({
	  scrollTop: 0
	  }, 800);
	  return false;
	  });		 
	  });
    
   
    jQuery('button').click(function() {
    	var form = jQuery(this).closest('form');
    	
    	if ( form.valid() ) {
    		form.css('opacity','.5');
    		var actUrl = form.attr('action');

    		jQuery.ajax({
    			url: actUrl,
    			type: 'post',
    			dataType: 'html',
    			data: form.serialize(),
    			success: function(data) {
    				form.html(data);
    				form.css('opacity','1');
                    form.find('.status').html('форма отправлена успешно');
    			},
    			error:	 function() {
    			     form.find('.status').html('серверная ошибка');
    			}
    		});
    	}
    });
});

/* const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'vertical',
	loop: true,
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
  }); */

