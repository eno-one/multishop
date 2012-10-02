$(document).ready(function(){
  sidebarHintAnimation(); // хинт сайдбара
  bottomFix(); // фикс пагинотора
  
  //tfootFix($('.with-fix')); // раскомментить, когда придумаю, как это запилить, блин!
  
  $(window).resize(function(){
    middleResize();
    bottomFix();
  });
  
  $('.block-fieldset').find('.row:first').addClass('first-row');
  
  $('.fake-sidebar').on('click', function(){
    hideSidebar();
  });
  
  $('.show-block-hint').on('click', function(){
    showSidebar();
  })

  $('.menu-category').on('click', function(){
    menuSliding($(this));
  });
  
  $('.open-filtr').on('click', function(){
    $('.hidden-part').slideToggle(200);
  });

  $('.sliding').on('click', function(e){
    allTrSliding($(this));
  });
  
  $('tr.parent').on('click', function(){
    trSliding($(this));
  });  
});

//------ functions ------------------------------------------------------------
function allTrSliding($obj){
    if($obj.parents().is('thead')){
      $('.child').slideToggle();
      e.preventDefault();
    }
}    

// слайдинг в сайдбаре
function menuSliding($obj){
  $obj.toggleClass('closed').toggleClass('opened');
  $obj.parent().next('ul').slideToggle(200);
  return false;
}

// слайдинг в таблице триггере
function trSliding($obj){
    var id= $obj.attr('id');
    
    $('.parent-'+id).slideToggle(200).toggleClass('visible');
    $obj.find('.sliding').toggleClass('closed-sign');
    $obj.find('.category-name').toggleClass('categ-opened');
}
   
// пряталка сайдбара  
function hideSidebar(){
	var $hint = $('.show-block-hint'),
      $left = $('.sidebar'),
      sidebarWidth = $('.sidebar').width(),
      middleWidth = middleWidthDetect(),
      contentInnerWidth = $('.container-inner').width();

	$('.middle').animate({
                'margin-left': -sidebarWidth,
                'width': (middleWidth + sidebarWidth) + 'px'
              }, 200, function(){
                        $left.removeClass('visible');
                        $hint.show();
                      }
    );
      
    $('.pagination-section').animate({
                'width': (contentInnerWidth + sidebarWidth) + 'px'
              }, 200);  
}     

// появлялка сайдбара
function showSidebar(){
	var $hint = $('.show-block-hint'),
  $left = $('.sidebar'),
  sidebarWidth = $('.sidebar').width(),
  middleWidth = middleWidthDetect(),
  contentInnerWidth = $('.container-inner').width();
  
	$('.middle').animate({
                'margin-left': 0,
                'width': (middleWidth - sidebarWidth) + 'px'
              }, 200, function(){
                        $left.addClass('visible');
                        $hint.hide();
                      }
  );
    
  $('.pagination-section').animate({
                'width': (contentInnerWidth - sidebarWidth) + 'px'
              }, 200);      
}

function middleWidthDetect(){
  return $('.middle').width();
}

function middleResize(){
  if($('.sidebar').hasClass('visible')){
    $('.middle').css('width', $('body').width() + 'px');
  } else{
    $('.middle').css('width', $('body').width() + $('.sidebar').width() + 'px');
  }
}

function bottomFix(){  
  
  if($('.sidebar').hasClass('visible')){
    $('.pagination-section').css('width', $('.container-inner').width() + 'px');
  } else{
    $('.pagination-section').css('width', $('.container-inner').width() + $('.sidebar').width() + 'px');
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
/*
function middleHeight(){
  var $middle = $('.middle'),
      middleTop = $middle.offset().top,
      middleBottom = middleTop + $middle.height(),
      windowHeight = $(window).height();

  if (middleBottom < windowHeight){
    $middle.css('height', (windowHeight - middleTop) + 'px');
  }    
}

function tableWidth(){
  var $middle = $('.middle');
  $middle.css('width', '100%');
}
*/
function tfootFix($table){
  var windowHeight = $(window).height(),
      tableBottom = $table.height() + $table.offset().top;
      $tfoot = $('.pagination-section'); 

  if(tableBottom > windowHeight){
    $tfoot.css('position', 'fixed');
  } else {
    $table.css('margin-bottom', '0px');
  }
}
