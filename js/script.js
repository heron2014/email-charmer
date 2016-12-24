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

})();
