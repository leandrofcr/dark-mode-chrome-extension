chrome.tabs.onUpdated.addListener((tabId,changeInfo,tab) => {
  if (tab.url.indexOf("https://*.betrybe.com/*") > -1 && 
      changeInfo.url === undefined){
    chrome.tabs.executeScript(tabId, {file: "popup.js"} );
  }
});