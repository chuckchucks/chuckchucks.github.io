
$(function(){

	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 500);
	    return false;
	});

	$('#scholarship-button').on("click", function(){
	    window.open('pdf/gapa-scholarship.pdf');
	    return true;
	});

	$('#grant-button').on("click", function(){
	    window.open('pdf/gapa-grant.pdf');
	    return true;
	});


});
