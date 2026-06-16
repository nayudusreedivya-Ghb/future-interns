function showOffer() {
    alert("Special Offer: Get 20% Discount Today!");
}

document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        alert(
            "Thank you " +
            name +
            "! Your message has been sent."
        );

        document
            .getElementById("contactForm")
            .reset();
    });