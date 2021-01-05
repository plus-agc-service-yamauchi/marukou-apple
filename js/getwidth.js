function getwidth(){
    'use strict';

      const bodyElem = document.getElementsByTagName("body");
      const bodyWidth = window.getComputedStyle(bodyElem[0],null).getPropertyValue("width");  // 縦スクロールバーの幅を含まない
      const numBodyWidth = parseInt(bodyWidth);
      console.log("body:",numBodyWidth);

      const tags = document.querySelectorAll("*"); // すべての要素を取得する
      for(let i=0; i < tags.length; i++){
        let tagMargingLeft = parseInt(window.getComputedStyle(tags[i],null).getPropertyValue("margin-left"));
        let tagMarginRight = parseInt(window.getComputedStyle(tags[i],null).getPropertyValue("margin-right"));
        let tagPaddingLeft = parseInt(window.getComputedStyle(tags[i],null).getPropertyValue("padding-left"));
        let tagPaddingRight = parseInt(window.getComputedStyle(tags[i],null).getPropertyValue("padding-right"));
        let tagBorderLeft = parseInt(window.getComputedStyle(tags[i],null).getPropertyValue("border-left"));
        let tagBorderRight = parseInt(window.getComputedStyle(tags[i],null).getPropertyValue("border-right"));
        let tagWidth = parseInt(window.getComputedStyle(tags[i],null).getPropertyValue("width"));

        let tagBoxSizing = window.getComputedStyle(tags[i],null).getPropertyValue("box-sizing");

        if(tagBoxSizing === "content-box"){
          var sumWidth = tagMargingLeft + tagMarginRight + tagBorderLeft + tagBorderRight + tagPaddingLeft + tagPaddingRight + tagWidth;
        }else{
          var sumWidth = tagMargingLeft + tagMarginRight + tagWidth;
        }

        if(numBodyWidth < sumWidth){
        console.log(tags[i],":",sumWidth,);
          console.log("marginl-left:",tagMargingLeft);
          console.log("border-left:",tagBorderLeft);
          console.log("padding-left:",tagPaddingLeft);
          console.log("width:",tagWidth);
          console.log("padding-left:",tagPaddingRight);
          console.log("border-left:",tagBorderRight);
          console.log("marginl-left:",tagMarginRight);
        }
        // console.log(i,tags[i],":",sumWidth);
      }
    }
    window.addEventListener("load", getwidth, false);