chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log('request', request);
    sendResponse({ newWord: 'synonym' })
  }
)

function click(e) {
  chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
    console.log('background.js click()');
    var specTab = tabs[0];
    chrome.tabs.executeScript(specTab.id, {file: "js/script.js"})
  })
}

chrome.browserAction.onClicked.addListener(click);
