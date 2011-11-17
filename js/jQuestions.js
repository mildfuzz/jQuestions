var jQuestions = {};

jQuestions.disconnectAnswers = function(){
	 jQuestions.animCount = 0;
	 $('.answers span').addClass('inactive');
}
jQuestions.checkAnswer = function(){
	jQuestions.animCount++;
	if(jQuestions.animCount = 2){
		$('.answers span').removeClass('inactive');
	}
}


jQuestions.animation = function(inE, altE) {
    var animObjA = {};
    var animObjB = {};
    var animObjC = {};
	
	
    animObjA[inE] = "-100%";
	animObjB[inE] = "0";
    if(typeof(altE) === "string"){
		animObjC[altE] = "-100%";
	} else {
		animObjC[inE] = "100%";
	}
	
	
    
    $('.active').removeAttr('style').animate(animObjC, 1000, function(){
		$(this).removeClass('active');
		jQuestions.checkAnswer();
	});
	$(jQuestions.next_action).removeAttr('style').css(animObjA).animate(animObjB, 1000, function(){
		
		$(this).addClass('active');
		jQuestions.checkAnswer();
	});
}
$(document).ready(function($) {
	$('.element').css({'right':'-100%'});
	$('.answers span').not('.inactive').click(function(){
			var answer = ($(this).hasClass('yes')) ? 'yes' : 'no';
			var direction = $('.active').attr('data-direction-'+answer);
			jQuestions.disconnectAnswers();
			jQuestions.next_action = $('.active').attr('data-'+answer);
			
			
			switch(direction){
				case 'up':
					jQuestions.animation('top'); //works
				break;
				case 'down':
					jQuestions.animation('bottom');
				break;
				case 'left':
					jQuestions.animation('left');
				break;
				case 'right':
					jQuestions.animation('right','left');
				break;
				default:
					//*/
					if(answer == 'yes'){
						jQuestions.animation('bottom');
					} else {
						jQuestions.animation('left');
					}
				break;
			}
				
						
	 
		
	});
});
