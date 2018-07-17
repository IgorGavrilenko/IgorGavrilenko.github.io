$(function(){ // start document ready



// start rating
$('.rating > span').click(function(){
	
	$('.rating > span').removeClass('active');
	
	$(this).prevAll().andSelf().addClass('active');
	
});
// start rating



}); // end document ready