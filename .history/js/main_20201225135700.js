// rollover.js
(function () {
    function rolloverListener (event) {
      var target, relatedTarget, reg, src;

      target = event.target || event.toElement;
      relatedTarget = event.relatedTarget || event.fromElement;

      if (target.tagName === 'IMG') {
        reg = /_off(?=\.\w+$)/;
        src = target.src;

        if (reg.test(src)) {
          target.src = src.replace(reg, '_on');
        }
      }

      if (relatedTarget && relatedTarget.tagName === 'IMG') {
        reg = /_on(?=\.\w+$)/;
        src = relatedTarget.src;

        if (reg.test(src)) {
          relatedTarget.src = src.replace(reg, '_off');
        }
      }
    }

    if (document.addEventListener) {
      document.addEventListener('mouseover', rolloverListener, false);
    } else if (document.attachEvent) {
      document.attachEvent('onmouseover', rolloverListener);
    }

  })();

  $(window).scroll(function(){
    var top = $(".animation").offset().top; // ターゲットの位置取得
    var position = top - $(window).height();  // ターゲットが上からスクロールしたときに見える位置
    var position_bottom = top + $(".animation").height();  // ターゲットが下からスクロールしたときに見える位置
    if($(window).scrollTop() > position && $(window).scrollTop() < position_bottom){
      $(".animation").css("display","block");
    }else{
      $(".animation").css("display","none");
    }
  })