(function () {

  if (document.getElementsByClassName('Am Al editable LW-avf')[0]) {
    document.getElementsByClassName('Am Al editable LW-avf')[0].addEventListener('click', function (e) {

      s = window.getSelection();
      var range = s.getRangeAt(0);
      var node = s.anchorNode;

      while (range.toString().indexOf(' ') != 0) {
        range.setStart(node,(range.startOffset - 1));
      }
      range.setStart(node, range.startOffset + 1);
      do {
        range.setEnd(node,range.endOffset + 1);
      } while(range.toString().indexOf(' ') == -1 && range.toString().trim() != '');

      var str = range.toString().trim().toLowerCase();
      var strippedWord = str.replace(/[^\w\s]/gi, '');

      chrome.runtime.sendMessage({ word: strippedWord }, function (response) {
        alert(response.newWord);
      });
    });
  }


  var ALERT_TITLE = "Charmer says: ";
  var ALERT_BUTTON_TEXT = "Close";

  if(document.getElementById) {
    window.alert = function(words) {
      createCustomAlert(words);
    }
  }

  function createCustomAlert(words) {

    d = document;

    if(d.getElementById("modalContainer")) {
      return;
    }

    mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    mObj.id = "modalContainer";
    mObj.style.height = d.documentElement.scrollHeight + "px";

    alertObj = mObj.appendChild(d.createElement("div"));
    alertObj.id = "alertBox";

    if(d.all && !window.opera) {
      alertObj.style.top = document.documentElement.scrollTop + "px";
    }

    alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
    alertObj.style.visiblity="visible";

    h1 = alertObj.appendChild(d.createElement("h1"));
    h1.appendChild(d.createTextNode(ALERT_TITLE));

    msg = alertObj.appendChild(d.createElement("p"));
  //msg.appendChild(d.createTextNode(words));
    msg.innerHTML = words;

    btn = alertObj.appendChild(d.createElement("a"));
    btn.id = "closeBtn";

    btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
    btn.href = "#";
    btn.focus();

    btn.onclick = function() {
      removeCustomAlert();
      return false;
    }

    alertObj.style.display = "block";
  }

  function removeCustomAlert() {
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
  }

})();
