$(document).ready(function(){
  sidebarHintAnimation(); // хинт сайдбара
  middleHeight(); // эмуляция одинаковой высоты колонок
  
  $('.block-fieldset').find('.row:first').addClass('first-row');
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
  
  var temp;
  
  $(window).resize(function(){
    middleHeight();
    middleResize();
  });
  
  
  
    /*--- sliding в журнале ---*/
  
  $('.sliding').click(function(){

    var $parent=$(this).parents('tr');
    var id= $parent.attr('id');
   
    $(this).toggleClass('closed-sign');
//    $parent.toggleClass('opened');
    $('.dropped-down-table tbody .sliding').toggleClass('closed-sign');
    $('.parent-'+id).slideToggle(200);
    return false;
  });
  
  $('.dropped-down-table thead .sliding').click(function(){
    $('.dropped-down-table .child').slideToggle();
    
    return false;
  });
  
  $('.dropped-down-table .parent').click(function(){
    var id= $(this).attr('id');
    $('.parent-'+id).slideToggle(200);
    $(this).find('.sliding').toggleClass('closed-sign');
    $(this).find('.category-name').toggleClass('categ-opened')
    return false;
  });  
});
   
// пряталка сайдбара  
function hideSidebar(){
	var $hint = $('.show-block-hint'),
      $left = $('.sidebar'),
      sidebarWidth = $('.sidebar').width(),
      middleWidth = middleWidthDetect();

	$('.middle').animate({
                'margin-left': -sidebarWidth,
                'width': (middleWidth + sidebarWidth) + 'px'
              }, 200, function(){
                        $left.removeClass('visible');
                        
                        $hint.show();
                      }
    );
}     

// появлялка сайдбара
function showSidebar(){
	var $hint = $('.show-block-hint'),
  $left = $('.sidebar'),
  sidebarWidth = $('.sidebar').width(),
  middleWidth = middleWidthDetect();
  
	$('.middle').animate({
                'margin-left': 0,
                'width': (middleWidth - sidebarWidth) + 'px'
              }, 200, function(){
                        $left.addClass('visible');
                        $hint.hide();
                      }
  );
}

function middleWidthDetect(){
  return $('.middle').width();
}

function middleResize(){
  if($('.sidebar').hasClass('visible')){
    $('.middle').css('width', $('body').width() + 'px');
  } else{
    console.log(132);
    $('.middle').css('width', $('body').width() - $('.sidebar').width() + 'px');
  }
  
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
/*
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
*/
function tableWidth(){
  var $middle = $('.middle');
  $middle.css('width', '100%');
}