$(document).ready(function(){
  //windowHeight();
  
  $(window).resize(function(){
    //windowHeight();
  });
  $('.hide-block').bind('click', function(){
    hideSidebar();
  });
  
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
      $right = $('.container');

  //if($left.hasClass('hidden')){
    $left.animate({
        'width': 0 + 'px'
      }, 200, function(){
          $left.removeClass('hidden').addClass('visible');
        }
    );
  /*  $right.animate({'margin-left': 220 + 'px'}, 200);
  } else{
    $left.animate({
        'width': 0 + 'px'
      }, 200, function(){
        $left.removeClass('visible').addClass('hidden');
      }
    );
    $right.animate({'margin-left': 0 + 'px'}, 200); 
  }
  */
}   

// определялка высоты окна
function windowHeight(){
  var windowHeight = $('body').height(),
      headerHeight = $('header').height() + 10.0 + 1.0, // 10 - paddings, 1 - border
      leftHeight = $('.sidebar').height(),
      rightHeight = $('.container').height(),
      bigger;

      bigger = (leftHeight > rightHeight) ? leftHeight : rightHeight;
      bigger = (bigger > windowHeight) ? bigger : windowHeight;

  $('.middle').css('height', bigger - headerHeight + 'px');
}

   