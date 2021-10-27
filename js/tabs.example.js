//функиця для табов
$.fn.Tabs = function() {
	var selector = this;

	this.each(function() {
		var obj = $(this); 
		$(obj.attr('href')).hide();
		$(obj).click(function() {
			$(selector).removeClass('recommend-tabs-item');
			
			$(selector).each(function(i, element) {
				$($(element).attr('href')).hide();
			});
			
			$(this).addClass('recommend-tabs-item');
			$($(this).attr('href')).fadeIn();
			return false;
		});
	});

	$(this).show();
	$(this).first().click();
	if(location.hash!='' && $('a[href="' + location.hash + '"]').length)
		$('a[href="' + location.hash + '"]').click();	
};


jQuery(document).ready(function($){

	//навешивать табы так
	//.parent-selector заменить селектор блока, в котором находятся ссылки с якорями
	$('.recommend-tabs a').Tabs();

});