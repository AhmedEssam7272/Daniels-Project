(function () {
  "use strict";  

  const navbar= document.querySelector("#main-nav");

  document.addEventListener("scroll", (e) => {
    const scrolled = document.scrollingElement.scrollTop;
    
    if (scrolled > 80) { //adjust to suit your need of when transition start
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
})();