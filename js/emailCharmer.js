(function () {
  window.addEventListener('DOMContentLoaded', () => {
    const bodyMessage = document.getElementsByClassName('Am Al editable LW-avf')[0].innerText.split(' ');
     bodyMessage.map((word) => {
       bodyMessage.addEventListener('click', () => {
        console.log('word', word));
        chrome.runtime.sendMessage({ word: word }, function(response) {
          console.log('background response: ', response.status, response);
        });
      });
    });
  });
}());
