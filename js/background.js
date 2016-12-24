chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request);
    httpGetAsync(`https://wordsapiv1.p.mashape.com/words/${request.word}`, key, sendResponse, function(response) {
      var res = JSON.parse(response).results[0].hasTypes[0];
      sendResponse({ newWord: res });
    });
    //http://stackoverflow.com/questions/20077487/chrome-extension-message-passing-response-not-sent
    return true;
  }
)

function click(e) {
  chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
    console.log('background.js click()');
    var specTab = tabs[0];
    chrome.tabs.executeScript(specTab.id, {file: "js/script.js"})
  })
}


function httpGetAsync(theUrl, key, sendResponse, callback) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      return callback(request.responseText);
    }
  }
  request.open("GET", theUrl, true);
  request.setRequestHeader('X-Mashape-Key', key);
  request.send();
}

chrome.browserAction.onClicked.addListener(click);
