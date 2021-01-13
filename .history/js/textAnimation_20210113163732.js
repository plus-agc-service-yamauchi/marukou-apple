// アニメーションさせたいクラス
var container = $(".animationTxt");
// アニメーションスピード
var speed = 10;

// テキストの間にスペースを入れます
var content = $(container).html();
var text = $.trim(content);
var newHtml = "";

// スペースで区切ったテキストを、テキストの数だけspanで囲む
text.split("").forEach(function(v) {
 newHtml += '<span>' + v + '</span>';
});

// spanで囲んだテキスト群をHTMLに戻す
$(container).html(newHtml);

// 1文字ずつ表示
var txtNum = 0;
setInterval(function() {
  $(container).find('span').eq(txtNum).css({opacity: 1});
 txtNum++
}, speed);

      $(window).scroll(function () {
        var top = $(".animationTxt").offset().top; // ターゲットの位置取得
        var position = top - $(window).height(); // 発火させたい位置
        if ($(window).scrollTop() > position) {
          $(".animationTxt").css("display", "block");
        } else {
          $(".animationTxt").css("display", "none");
        }
      });
