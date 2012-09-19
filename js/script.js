$(document).ready(function(){
  showSidebarHintAnimation();
 
  var sidebarWidth = $('.sidebar').width();
 
  $('.hide-block').on('click', function(){
    hideSidebar(sidebarWidth);
  });
  
  $('.show-block-hint').on('click', function(){
    showSidebar(sidebarWidth);
  })
  
  $('.menu-category').on('click', function(){
    $(this).toggleClass('closed').toggleClass('opened');
    $(this).parent().next('ul').slideToggle(200);
    return false;
  });
  
  $('.open-filtr').on('click', function(){
    $('.hidden-part').slideToggle(200);
  });
});
   
   
// пряталка сайдбара  
function hideSidebar(width){
	$hint = $('.show-block-hint');
	$('.middle').animate({
					'margin-left': -width,
					'width': ($(this).width() + width) + 'px'
				}, 200, function(){
							$hint.show();
						}
    );
}     

// появлялка сайдбара
function showSidebar(width){
	$hint = $('.show-block-hint');
	$('.middle').animate({
					'margin-left': 0,
					'width': $(this).width() + 'px'
				}, 200, function(){
						  $hint.hide();
						}
  );
}

function showSidebarHintAnimation(){
  var $hint = $('.show-block-hint');
  $hint.mouseover(function(){
    $(this).animate({'margin-left': 0 + 'px'}, 20);
  });
  $hint.mouseleave(function(){
    $(this).animate({'margin-left': -23 + 'px'}, 20);
  });
}