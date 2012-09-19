$(document).ready(function(){
  sidebarHintAnimation();

  tfootFix();
  middleHeight();
  
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
  
  $(window).resize(function(){
    console.log(123);
    tfootFix();
    middleHeight();

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

function sidebarHintAnimation(){
  var $hint = $('.show-block-hint');
  $hint.mouseover(function(){
    $(this).animate({'margin-left': 0 + 'px'}, 20);
  });
  $hint.mouseleave(function(){
    $(this).animate({'margin-left': -23 + 'px'}, 20);
  });
}

function middleHeight(){
  var $middle = $('.middle'),
      middleTop = $middle.offset().top,
      middleBottom = middleTop + $middle.height(),
      windowHeight = $(window).height();

  if (middleBottom < windowHeight){
    $middle.css('height', (windowHeight - middleTop) + 'px');
  }    
}

function tfootFix(){
  var windowHeight = $(window).height(),
      $table = $('.with-fix'),
      tableBottom = $table.height() + $table.offset().top;
      $tfoot = $('.pagination-section'); 

  if(tableBottom > windowHeight){
    $tfoot.css('position', 'fixed');
  } else {
    $table.css('margin-bottom', '0px');
  }
}