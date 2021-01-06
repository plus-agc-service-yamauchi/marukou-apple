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

  EventTarget.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  });