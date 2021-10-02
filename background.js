  const getState = localStorage.getItem('darkMode');
  const isAppOn = getState === 'on'

console.log(isAppOn)

  if(isAppOn) {
    document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";
  
    const media = document.querySelectorAll("img, picture, figure video, .block-code, .player");
  
    media.forEach((el) => {
      el.style.filter = "invert(1) hue-rotate(180deg)";
    });
  }


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