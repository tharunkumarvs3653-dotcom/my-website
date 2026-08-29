document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll(".card button");

  buttons.forEach(function (button) {

    button.addEventListener("click", function (event) {

      event.preventDefault();

      const card = button.closest(".card");
      const product = card.querySelector("h3").textContent.trim();

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

      const whatsappURL =
        "https://wa.me/919894647206?text=" +
        encodeURIComponent(message);

      window.location.href = whatsappURL;

    });

  });
  window.addEventListener("load", function () {
    setTimeout(function () {
        const splash = document.getElementById("splash-screen");

        if (splash) {
            splash.style.display = "none";
        }
    }, 2000);
});

});
