if(document.querySelector(".popup")){

  const getState = localStorage.getItem('darkMode');
  const button = document.querySelector('.main-btn');
  const isAppOn = getState === 'on'

  button.checked = isAppOn;

  if(isAppOn) {
    chrome.tabs.executeScript({
      file: "appOn.js"
    });
  }  

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