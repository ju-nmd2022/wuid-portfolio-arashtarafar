// Since I have a terrible memory and draw every snippet from the internet for modification,
// the names of the source websites will be briefly mentioned at the top of each one.

const navbarOffset = 80;
var scrollerHandle = document.querySelector("#scroll-prompt");

scrollerHandle.addEventListener("click", function(){
    // From "developer.mozilla.org"
    window.scroll({
        // Taken from answer by user "Andy E" on "stackoverflow.com"
        top: document.getElementById("interests").getBoundingClientRect().top - navbarOffset,
        left: 0,
        behavior: 'smooth'
      });
});