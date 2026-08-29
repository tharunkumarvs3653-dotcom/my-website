const buttons = document.querySelectorAll(".card button");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const product = button.parentElement.querySelector("h3").innerText;

       const message = `Hello Tharun Mobile Shop 👋

I’m interested in purchasing the ${product}.

Please share:
* Available colors
* Storage/RAM options
* Final price
* Warranty details
* Delivery availability

Thank yo

        const phoneNumber = "9894647206";

        const whatsappURL =
            "https://wa.me/" + phoneNumber +
            "?text=" + encodeURIComponent(message);

        window.open(whatsappURL, "_blank");

    });

});s
