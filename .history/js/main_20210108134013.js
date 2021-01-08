// function smartRollover() {
//   if(document.getElementsByTagName) {
//       var images = document.getElementsByTagName("img");

//       for(var i=0; i < images.length; i++) {
//           if(images[i].getAttribute("src").match("_off."))
//           {
//               images[i].onmouseover = function() {
//                   this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));
//               }
//               images[i].onmouseout = function() {
//                   this.setAttribute("src", this.getAttribute("src").replace("_on.", "_off."));
//               }
//           }
//       }
//   }
// }

// if(window.addEventListener) {
//   window.addEventListener("load", smartRollover, false);
// }
// else if(window.attachEvent) {
//   window.attachEvent("onload", smartRollover);
// }

jQuery(function($) {
  //アイコン hoverアクション
  $('ul a img').each(function(){
    var img = $(this);
    var src_off = img.attr('src');
    var src_on = src_off.replace(/^(.+)_off(\.[^\.]+)$/, '$1_on$2');
    $('<img />').attr('src', src_on);
    $(this).parents('a').hover(function(){
      img.attr('src', src_on);
    },function(){
      img.attr('src', src_off);
    });
  });
  });
