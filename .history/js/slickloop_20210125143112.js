// 左右の透過の2周目ががたつく対応
$slider.on("beforeChange", (event, slick, currentSlide, nextSlide) => {
  $slider.find(".slick-slide").each((index, el) => {
    const $this = $(el),
      slickindex = $this.attr("data-slick-index");
    if (nextSlide == slick.slideCount - 1 && currentSlide == 0) {
      // 現在のスライドが最初のスライドでそこから最後のスライドに戻る場合
      if (slickindex == "-1") {
        // 最後のスライドに対してクラスを付与
        $this.addClass("is-active-next");
      } else {
        // それ以外は削除
        $this.removeClass("is-active-next");
      }
    } else if (nextSlide == 0) {
      // 次のスライドが最初のスライドの場合
      if (slickindex == slick.slideCount) {
        // 最初のスライドに対してクラスを付与
        $this.addClass("is-active-next");
      } else {
        // それ以外は削除
        $this.removeClass("is-active-next");
      }
    } else {
      // それ以外は削除
      $this.removeClass("is-active-next");
    }
  });
});