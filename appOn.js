(function(){ 
  document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";
  
  const media = document.querySelectorAll('img', 'figure', 'iframe', '.ada-card-image', '.block-code');

  media.forEach((el) => {
    el.style.filter = "invert(1) hue-rotate(180deg)";
  });
  localStorage.setItem('darkMode', 'on')

})();