 document.addEventListener("DOMContentLoaded", function () {
      var scrollButton = document.getElementById("walloftrust");

      scrollButton.addEventListener("click", function () {
        scrollToElement(".walloftrust");
      });

      function scrollToElement(selector) {
        var element = document.querySelector(selector);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth"
          });
        }
      }
    });