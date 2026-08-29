document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".card button");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            const product = button.parentElement.querySelector("h3").innerText;

            const message = `Hello Tharun Mobile Shop 👋

I'm interested in purchasing the ${product}.

Please share:
* Available colors
* Storage/RAM options
* Final price
* Warranty details
* Delivery availability

Thank you`;

            const phoneNumber = "919894647206";

            const whatsappURL =
                "https://wa.me/" +
                phoneNumber +
                "?text=" +
                encodeURIComponent(message);

            window.location.href = whatsappURL;
        });

    });
