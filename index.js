$('.Knowledge').on('click',function(){
	const Knowledge=$('#Knowledge').position().top;

	$('html,body').animate({
		scrollTop:Knowledge
	},900);
});


$('.portfolio').on('click',function(){
	const portfolio=$('#portfolio').position().top;

	$('html,body').animate({
		scrollTop:portfolio
	},900);
});