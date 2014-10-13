// JavaScript Document
/* remux by me, learnt from hover effect from mattbango.com */
$(document).ready(function() {
	$('.viewport').mouseenter(function(e) {
		$(this).children('div').children('img').animate(
		{
			width:'95%',
		}, 100);
		$(this).children('div').children('span').fadeIn(500);
	}).mouseleave(function(e) {
		$(this).children('div').children('img').animate(
		{
			width:'100%'
		}, 100);
		$(this).children('div').children('span').fadeOut(800);
	});
	
	/* restore size navbar */
	$('.btn-success').mousedown(function(e) {
		$(this).addClass('hidden');
		$('.collapsefx').removeClass('hidden').animate({height:'150px'});
	});
	$('section').mousedown(function(e) {
		$('.collapsefx').addClass('hidden').animate({height:'0px'},500);
		$('.btn-success').removeClass('hidden');
	});
	$('.navbar .collapsefx').not(children('a')).mousedown(function(e) {
		$('.collapsefx').addClass('hidden').animate({height:'0px'},500);
		$('.btn-success').removeClass('hidden');
	});

});


