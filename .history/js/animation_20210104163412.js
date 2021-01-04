$(window).scroll(function(){
    var top = $(".animation").offset().top; // ターゲットの位置取得
    var position = top - $(window).height();  // 発火させたい位置
    if($(window).scrollTop() > position){
      $(".animation").css("display","block");
    }else{
      $(".animation").css("display","none");
    }
  })