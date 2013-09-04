jQuery(document).ready(function()
{
	jQuery(document.body).pixusNotifications({
			speed: 300,
			animation: 'fadeAndSlide',
			hideBoxes: true,
			cookieExpires: 365
	});
});

(function($)
{
    $.fn.pixusNotifications = function(options)
	{
		var defaults = {
			speed: 200,
			animation: 'fade',
			hideBoxes: true,
			cookieExpires: 7
		};

		var options = $.extend({}, defaults, options);
		
		return this.each(function()
		{
			var wrapper = $(this),
				notification = wrapper.find('.tsc_message_box1'),
				content = notification.find('p'),
				title = content.find('strong'),
				closeBtn = $('<a class="close" href="#">x</a>');
			
			$(document.body).find('.tsc_message_box1').each(function(i)
			{
				var i = i+1;
				$(this).attr('id', 'notification_'+i);
			});
			
			notification.filter('.closeable').append(closeBtn);
			
			closeButton = notification.find('> .close');
			
			closeButton.click(function()
			{
				hideIt( $(this).parent() );
				return false;
			});			
			
			function hideIt(object)
			{
				switch(options.animation)
				{
					case 'fade': fadeIt(object);     break;
					case 'slide': slideIt(object);     break;
					case 'box': boxAnimIt(object);     break;
					case 'fadeAndSlide': fadeItSlideIt(object);     break;
					default: fadeItSlideIt(object);
				}
			};
			
			function fadeIt(object)
			{	object
				.fadeOut(options.speed);
			}			
			function slideIt(object)
			{	object
				.slideUp(options.speed);
			}			
			function fadeItSlideIt(object)
			{	object
				.fadeTo(options.speed, 0, function() { slideIt(object) } );
			}			
			function boxAnimIt(object)
			{	object
				.hide(options.speed);
			}
			
			if (options.hideBoxes)
			{
				notification.each(function(n)
				{
					var pId = $(this).attr('id');
					$(this).find('.close').click(function()
					{
						$.cookie(pId, 'hidden', {expires: options.cookieExpires});
					});
					
					var cookieId = $.cookie(pId);
					
					if (cookieId == 'hidden')
					{
						$('#'+pId).remove();
					}
					notification.css({'display': 'block', 'visiblity': 'visible'});
				});
			}
			
			else if (! options.hideBoxes)
			{
				notification.css({'display': 'block', 'visiblity': 'visible'});
			}
			
		});
	};
})(jQuery);

//jQuery.noConflict();


// <![CDATA[
// JavaScript Document

$(function() {

  $('.tsc_message_box2').hover(
    function() { $(this).css('cursor','pointer'); },
	function() { $(this).css('cursor','auto'); });
  $('.tsc_message_box2 span').click(function() { $(this).parents('.tsc_message_box2').fadeOut(800); });
  $('.tsc_message_box2').click(function() { $(this).fadeOut(800); });

});

// ]]>
