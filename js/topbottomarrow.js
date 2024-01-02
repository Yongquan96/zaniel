
function scrollToContent(content) {
    $('html, body').animate({ scrollTop: document.body.scrollHeight }, '300');
}

topbtn = document.getElementById("TopBtn");
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $('html, body').animate({ scrollTop: 0 }, '300');

}

document.addEventListener("DOMContentLoaded", function () {
      window.addEventListener("scroll", function () {
        var scrollButton = document.getElementById("TopBtn");

        // Adjust this value based on when you want the button to appear
        var scrollThreshold = 200;

        if (window.scrollY > scrollThreshold) {
          scrollButton.style.display = "block";
        } else {
          scrollButton.style.display = "none";
        }
      });
    });

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

    