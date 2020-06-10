var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*------------------------------------------
Project:    HandyMan
Author:     P. Roy
URL:        http://www.handyman.proy.info/
Version:    1.0
Last change:    20/02/2015
------------------------------------------*/


/* Preloader ---------------------------- */
$(window).load(function(){   
	$('.preloader').fadeOut(1000); 
});


/* From Select ------------------------- */
$(function() { 
	$('select').selectize();
});


/* Mobile Menu ------------------------- */
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});


// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


/* Smooth Scrolling -------------------- */
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


/* Work portfolio Grid------------------ */
$(function() {
		
	/* initialize shuffle plugin */
	var $grid = $('#portfoliogrid');

	$grid.shuffle({
		itemSelector: '.portfolio-item' // the selector for the items in the grid
	});

	/* reshuffle when user clicks a filter item */
	$('#filters a').click(function (e) {
		e.preventDefault();

		// set active class
		$('#filters a').removeClass('active');
		$(this).addClass('active');

		// get group name from clicked item
		var groupName = $(this).attr('data-group');
		//alert(groupName);
		// reshuffle grid
		$grid.shuffle('shuffle', groupName );
	});

});


/* Work Portfolio Gallery -------------- */
$(document).ready(function(){ 	
	$("a[data-rel^='prettyPhoto']").prettyPhoto({hook: 'data-rel'});
	setTimeout(function(){ $('#filters li a.active').click(); }, 2000);//little patch for grid height
});


/* Form Captcha Security ---------------- */
$(function() {
	$('.captcha').realperson({ 
	    length: 4, // Number of characters to use 
	    regenerate: 'Click to change', // Instruction text to regenerate 
	    hashName: '{n}B4429CD97EAEA9CFBBFBDFCD46554', // Name of the hash value field to compare with, 
	        // use {n} to substitute with the original field name 
	    dot: '*', // The character to use for the dot patterns 	    
	    chars: $.realperson.alphanumeric  // The characters allowed */ 
	});  
	
});


/* Process Form ------------------------ */

// prepare the form when the DOM is ready 
$(document).ready(function() { 
   
    $("form").each(function () {
    
	    var form = $(this);
	    //var parent = form.parent();
	    var submitbutton = form.children('input[type="submit"]');
 		var submit_orginaltext= submitbutton.val();
 		var submit_actiontext= "Submitting, please wait...";
	   	    
	 	form.validate({
			errorClass: "has-error",
			validClass: "has-success",
			errorElement: "label",			
			submitHandler: function(form) {
				// bind to the form's submit event 
			    $(form).ajaxSubmit({
			    	dataType:      'json',
			    	// pre-submit callback 
			    	beforeSubmit: function(formData, jqForm, options) { 
					    // formData is an array; here we use $.param to convert it to a string to display it 
					    // but the form plugin does this for you automatically when it submits the data 
					    //var queryString = $.param(formData); 
					 	
					    // jqForm is a jQuery object encapsulating the form element.  To access the 
					    // DOM element for the form do this: 
					    // var formElement = jqForm[0]; 
					 	
					    //alert('About to submit: \n\n' + queryString); 
					 
					    // here we could return false to prevent the form from being submitted; 
					    // returning anything other than false will allow the form submit to continue 
					    submitbutton.val(submit_actiontext);
					    return true; 
					},
					// post-submit callback 
			    	success: function(responseText, statusText, xhr, form)  { 
					    // for normal html responses, the first argument to the success callback 
					    // is the XMLHttpRequest object's responseText property 
					 
					    // if the ajaxSubmit method was passed an Options Object with the dataType 
					    // property set to 'xml' then the first argument to the success callback 
					    // is the XMLHttpRequest object's responseXML property 
					 
					    // if the ajaxSubmit method was passed an Options Object with the dataType 
					    // property set to 'json' then the first argument to the success callback 
					    // is the json data object returned by the server 
					 	
					    /*alert('status: ' + statusText + '\n\nresponseText: \n' + responseText + 
					        '\n\nThe output div should have already been updated with the responseText.'); */
					    if(responseText.success) form[0].reset();
					    form.children('.messagebox').html(responseText.message);
					    submitbutton.val(submit_orginaltext);     
					}
			    
			    });
			}
		});
	 
	});

}); 


}
/*
     FILE ARCHIVED ON 18:03:43 Mar 04, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:34:00 Jun 10, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.2
  CDXLines.iter: 15.988 (3)
  captures_list: 1396.787
  load_resource: 862.07
  esindex: 0.015
  PetaboxLoader3.datanode: 461.362 (4)
  LoadShardBlock: 1374.643 (3)
  exclusion.robots.policy: 0.185
  RedisCDXSource: 2.343
  PetaboxLoader3.resolve: 1725.238 (2)
*/