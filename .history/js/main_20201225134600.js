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

  // スクロールで要素が表示された時にclassを付与する
// スクロールで要素が表示された時にclassを付与する
function add_class_in_scrolling(target) {
  var winScroll = $(window).scrollTop();
  var winHeight = $(window).height();
  var scrollPos = winScroll + winHeight;

  if(target.offset().top < scrollPos) {
      target.addClass('on');
  }
}

//スクロール連動アニメーション
$(window).on('load scroll', function() {

if($('.div__scroll_page_1').length) {
  add_class_in_scrolling($('.svg_1'));
  add_class_in_scrolling($('.svg_2'));
  add_class_in_scrolling($('.svg_3'));
  add_class_in_scrolling($('.svg_4'));
  add_class_in_scrolling($('.svg_5'));

} else if($('.div__scroll_page_2').length) {
  add_class_in_scrolling($('.svg_1'));
  add_class_in_scrolling($('.svg_2'));
  add_class_in_scrolling($('.svg_3'));
  add_class_in_scrolling($('.svg_4'));
}

});
