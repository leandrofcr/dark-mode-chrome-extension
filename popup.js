const previewState = () => {
  const getState = localStorage.getItem('darkMode');
  const isAppOn = getState === 'on'

  if(isAppOn) {
    chrome.tabs.executeScript({
      file: "appOn.js"
    });
  }
}

chrome.tabs.onUpdated.addListener(( _tabId, _info, tab ) => {
  console.log('LISTENER ESTA SENDO EXECUTADO ***************')
    previewState();
    console.log("tab: ",tab)
});

if(document.querySelector(".popup")){
  const getState = localStorage.getItem('darkMode');
  const button = document.querySelector('.main-btn');
  
  const isAppOn = getState === 'on'
  button.checked = isAppOn;

  
  previewState();

    

  button.addEventListener("click", () => {
    if(button.checked) {
      chrome.tabs.executeScript({
        file: "appOn.js"
      });
    }

    if(!button.checked) {
      chrome.tabs.executeScript({
        file: "appOff.js"
      });
    }
  });
};