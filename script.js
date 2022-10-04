var button = document.getElementById("button"); /*get the button*/

//button will show up after scrolling 20px
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    }
    else {
        button.style.display = "none";
    }
}

//when the button is clicked, go to the top
function topFunction() {
    document.body.scrollTop = 0; // for Safari
    document.documentElement.scrollTop = 0; // Chrome and Firefox
}