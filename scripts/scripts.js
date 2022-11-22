// Since I have a terrible memory and draw every snippet from the internet for modification,
// the names of the source websites will be briefly mentioned at the top of each one.

// From "developer.mozilla.org"
var navbarHandle = document.getElementsByTagName("nav")[0];

// From "jstips.com"
// Attach an event listener to check for window scroll
window.addEventListener('scroll',(event) => {
    // Taken from answer by user "tobek" on "stackoverflow.com"
    // Toggle navigation bar class based on the scroll amount
    if(document.documentElement.scrollTop === 0){
        // From "w3schools.com"
        navbarHandle.classList.remove("dockedNav");
    } else{
        navbarHandle.classList.add("dockedNav");
    }
});

