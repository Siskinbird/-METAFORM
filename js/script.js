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