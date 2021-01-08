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

  function smartRollover() {
    if(document.getElementsByTagName) {
      var images = document.getElementsByTagName("img");

      for(var i=0; i < images.length; i++) {
        if(images[i].getAttribute("src").match("_off."))
        {
          images[i].onmouseover = function() {
            this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));
          }
          images[i].onmouseout = function() {
            this.setAttribute("src", this.getAttribute("src").replace("_on.", "_off."));
          }
        }
      }
    }
  }

  if(window.addEventListener) {
    window.addEventListener("load", smartRollover, false);
  }
  else if(window.attachEvent) {
    window.attachEvent("onload", smartRollover);
  }