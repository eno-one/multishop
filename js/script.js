$(document).ready(function(){
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
      $right = $('.container-inner'),
      $background = $('.background');

  if($left.hasClass('hidden')){
    $left.animate({
        'margin-left': $left.css('margin-left') + 'px'
      }, 200, function(){
          $left.removeClass('hidden').addClass('visible');
        }
    );
    $right.animate({'margin-left': 220 + 'px'}, 200);
  } else{
    $left.animate({
        'margin-left': (parseInt($left.css('margin-left')) - parseInt($left.width())+5) + 'px'
      }, 200, function(){
        $left.removeClass('visible').addClass('hidden');
      }
    );
    $right.animate({'padding-left': 5 + 'px'}, 200); 
    $background.animate({'margin-left': -215 + 'px'}, 200);
  }
  
}     