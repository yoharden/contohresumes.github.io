// Get the button
var myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
myButton.addEventListener('click', function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
