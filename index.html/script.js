const buttons = document.querySelectorAll(".card button");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const product = button.parentElement.querySelector("h3").innerText;

        const message = "Hi, I am interested in buying " + product;

        const phoneNumber = "9894647206";

        const whatsappURL =
            "https://wa.me/" + phoneNumber +
            "?text=" + encodeURIComponent(message);

        window.open(whatsappURL, "_blank");

    });

});s
