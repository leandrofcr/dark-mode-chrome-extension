(function(){ 

  document.querySelector("html").style.filter = "invert(0) hue-rotate(0deg)";

  const media = document.querySelectorAll('img', 'figure', 'iframe', '.ada-card-image', '.block-code');

  media.forEach((el) => {
    el.style.filter = "invert(0) hue-rotate(0deg)";
  });

  localStorage.setItem('darkMode', 'off')

})();