$(document).ready(function(){
  $(window).resize(function(){
    sidebarPosition();
  });
  
  showSidebarHintAnimation();
 
	var sidebarWidth = $('.sidebar').width();
 
  $('.hide-block').on('click', function(){
    hideSidebar(sidebarWidth);
  });
  
  $('.show-block-hint').on('click', function(){
    showSidebar(sidebarWidth);
  })
  
  $('.menu-category').bind('click', function(){
    $(this).toggleClass('closed').toggleClass('opened');
    $(this).parent().next('ul').slideToggle(200);
    return false;
  });
  
  $('.open-filtr').bind('click', function(){
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
	console.log(width);
	$hint = $('.show-block-hint');
	$('.middle').animate({
					'margin-left': 0,
					'width': $(this).width() + 'px'
				}, 200, function(){
      $hint.hide();
    }
  );
/*
  var $left = $('.sidebar'),
      $right = $('.container-inner'),
      $background = $('.background'),
      $hint = $('.show-block-hint');
      
  $left.animate({
    'margin-left': (parseInt($left.css('margin-left')) + parseInt($left.width())) + 'px'
  }, 200, function(){
      $hint.hide();
    }
  );
  $right.animate({'padding-left': 220 + 'px'}, 200);
  $background.animate({'margin-left': 0 + 'px'}, 200);
  */
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

function sidebarPosition(){
  var marginLeft= $(window).width();
  
  $('.sidebar').css('margin-left', -marginLeft + 'px');
}