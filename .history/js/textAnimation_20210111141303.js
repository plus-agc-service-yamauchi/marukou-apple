// アニメーションさせたいクラス
var container = $(".demoTxt");
// アニメーションスピード
var speed = 80;

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