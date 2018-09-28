chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
    StorageArea.set()
  });
});
chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [new chrome.declarativeContent.PageStateMatcher({
      pageUrl: {hostEquals: 'developer.chrome.com'},
    })
    ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
  }]);
});



var hour = 10;
var min = 0;
var sec = 0;

function addOneHour(){

  document.getElementById("hours").innerHTML = "22";

}
