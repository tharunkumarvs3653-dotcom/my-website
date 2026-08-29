document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll(".card button");

  buttons.forEach(function (button) {

    button.addEventListener("click", function () {

      const product = button.parentElement.querySelector("h3").innerText;

      const message =
        "Hello Tharun Mobile Shop 👋\n\n" +
        "I'm interested in purchasing the " + product + ".\n\n" +
        "Please share:\n" +
        "• Available colors\n" +
        "• Storage/RAM options\n" +
        "• Final price\n" +
        "• Warranty details\n" +
        "• Delivery availability\n\n" +
        "Thank you!";

      const phoneNumber = "919894647706";

      const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message);

      window.open(whatsappURL, "_blank");

    });

  });

});
