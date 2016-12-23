(function(exports) {
  function getText(doc) {
    var text = '';
    if (doc.getElementsByClassName('Am Al editable LW-avf')[0]) {
      text = doc.getElementsByClassName('Am Al editable LW-avf')[0].innerText;
      console.log('text', text);
    } else {
      console.log('empty');
    }
    return text;
  exports.getText = getText;
})(this);
