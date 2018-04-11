var intFrameWidth = window.innerWidth;
if (intFrameWidth <= 600) {
$(function(){
		// All jQuery code goes here
		$('.navigation >li').hover(function(){
            $(this).children("ul").slideDown(200);
            
        }, function(){
            $(this).children("ul").slideUp(200);
        })
	})
      
    } 