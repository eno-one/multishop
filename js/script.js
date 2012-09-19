$(document).ready(function(){
  sidebarHintAnimation(); // хинт сайдбара
 // tfootFix($('.with-fix')); // фикс футера таблицы
  middleHeight(); // эмуляция одинаковой высоты колонок
  
  $('.hide-block').on('click', function(){
    hideSidebar();
  });
  
  $('.show-block-hint').on('click', function(){
    showSidebar();
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
    tfootFix();
    middleHeight();
  });
});
   
// пряталка сайдбара  
function hideSidebar(){
	var $hint = $('.show-block-hint'),
      sidebarWidth = $('.sidebar').width();
	$('.middle').animate({
                'margin-left': -sidebarWidth,
                'width': ($(this).width() + sidebarWidth) + 'px'
              }, 200, function(){
                        $hint.show();
                      }
    );
}     

// появлялка сайдбара
function showSidebar(){
	var $hint = $('.show-block-hint');
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

function tfootFix($table){
  var windowHeight = $(window).height(),
      //$table = $('.with-fix'),
      tableBottom = $table.height() + $table.offset().top;
      $tfoot = $('.pagination-section'); 

  if(tableBottom > windowHeight){
    $tfoot.css('position', 'fixed');
  } else {
    $table.css('margin-bottom', '0px');
  }
}

function tableWidth(){
  var $middle = $('.middle');
  $middle.css('width', '100%');
}