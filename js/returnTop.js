$(function () {
    var topBtn = $('#topBtn'); // ボタンを指定
    topBtn.hide(); //最初は隠しておく。CSSで隠してもオッケー

    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 100) { // 100px以上スクロールしたら出てくる
        topBtn.fadeIn();
      } else {
        topBtn.fadeOut();
      }

      scrollHeight = $(document).height();
      scrollPosition = $(window).height() + $(window).scrollTop();
      footHeight = $("footer").innerHeight(); // ここでフッターの高さを取得
      if ( scrollHeight - scrollPosition  <= footHeight ) { // フッター付近まで来たら
        topBtn.css({
          "position":"absolute",
          "bottom": footHeight + 0 // フッターの65px上で止まる
        });
      } else { // それ以外は画面下から20pxの位置に固定
        topBtn.css({
        "position":"fixed",
        "bottom": "0"
      });
      }

    });
  });

  //■page topボタン
$(function(){
  var topBtn=$('#pageTop');
  topBtn.hide();

  //◇ボタンの表示設定
  $(window).scroll(function(){
    if($(this).scrollTop()>80){
      //---- 画面を80pxスクロールしたら、ボタンを表示する
      topBtn.fadeIn();
    }else{
      //---- 画面が80pxより上なら、ボタンを表示しない
      topBtn.fadeOut();
    }
  });

  // ◇ボタンをクリックしたら、スクロールして上に戻る
  topBtn.click(function(){
    $('body,html').animate({
    scrollTop: 0},500);
    return false;
  });

  });