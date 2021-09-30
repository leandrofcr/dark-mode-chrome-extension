(function(){ 

  document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";
  
  const media = document.querySelectorAll("img, picture,figure video, .block-code, .player");

  media.forEach((el) => {
    el.style.filter = "invert(1) hue-rotate(180deg)";
  });
  localStorage.setItem('darkMode', 'on')

})();