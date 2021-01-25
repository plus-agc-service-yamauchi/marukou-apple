(function($){
    $(function(){
       $(window).scroll(function(){
          var scr = $(window).scrollTop();
          if(scr > 1){
             $('#logo').addClass('mini');
          }else{
             $('#logo').removeClass('mini');
          }
       })
    })
    })(jQuery);