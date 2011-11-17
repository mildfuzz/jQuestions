$(document).ready(function($) {
	var eHeight = $('.element.active').height();
	var qHeight = $('.element.active span.text').height()+$('.element.active div.answers').height();
	var top = (eHeight/2)-(qHeight/2);
	
	var eWidth = $(window).width();
	var qWidth = $('.element.active span.answers').width();
	var left = (eWidth/2)-(qWidth/2);
	
	
	
	
	$('.element span.text').css({'margin-top':top+'px','margin-left':left+'px'});
	$('.element span.answers').css({'margin-left':left+'px'});
});