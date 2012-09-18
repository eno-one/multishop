$(document).ready(function(){
  
  showSidebarHintAnimation();
  
  $('.hide-block').on('click', function(){
    hideSidebar();
  });
  
  $('.show-block-hint').on('click', function(){
    showSidebar();
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
function hideSidebar(){
  var $left = $('.sidebar'),
      $right = $('.container-inner'),
      $background = $('.background'),
      $hint = $('.show-block-hint');
/*
  if($left.hasClass('hidden')){
    $left.animate({
        'margin-left': $left.css('margin-left') + 'px'
      }, 200, function(){
          $left.removeClass('hidden').addClass('visible');
          $hint.hide();
        }
    );
    $right.animate({'margin-left': 220 + 'px'}, 200);
  } else{
  */
  $left.animate({
      'margin-left': '300px'//(parseInt($left.css('margin-left')) - parseInt($left.width())+5) + 'px'
    }, 200, function(){
      $left.removeClass('visible').addClass('hidden');
      $hint.show();
    }
  );
  $right.animate({'padding-left': 5 + 'px'}, 200); 
  $background.animate({'margin-left': -215 + 'px'}, 200);
  //}
}     

function showSidebar(){
  var $left = $('.sidebar'),
      $right = $('.container-inner'),
      $background = $('.background'),
      $hint = $('.show-block-hint');
  $left.animate({
    'margin-left': $left.css('margin-left') + 'px'
  }, 200, function(){
      $left.removeClass('hidden').addClass('visible');
      $hint.hide();
    }
  );
  $right.animate({'margin-left': 220 + 'px'}, 200);
}

function showSidebarHintAnimation(){
  var $hint = $('.show-block-hint');
  $hint.mouseover(function(){
    $(this).animate({'margin-left': 0 + 'px'}, 20);
  });
  $hint.mouseleave(function(){
    $(this).animate({'margin-left': -20 + 'px'}, 20);
  });
}