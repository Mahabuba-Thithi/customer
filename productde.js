document.addEventListener("DOMContentLoaded", function() {
    // Get the modal
    var modal = document.getElementById("modal");

    // Get the button that opens the modal
    var buttons = document.querySelectorAll(".show-model");

    // Get the <span> element that closes the modal
    var span = document.querySelector(".close");

    // When the user clicks the button, open the modal 
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            modal.style.display = "block";
        });
    });

    // When the user clicks on <span> (x), close the modal
    span.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the modal
    var modal = document.getElementById("modalsaree");

    // Get the button that opens the modal
    var buttons = document.querySelectorAll(".showsaree-model");

    // Get the <span> element that closes the modal
    var span = document.querySelector(".closesaree");

    // When the user clicks the button, open the modal 
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            modal.style.display = "block";
        });
    });

    // When the user clicks on <span> (x), close the modal
    span.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});



document.addEventListener("DOMContentLoaded", function() {
    // Get the modal
    var modal = document.getElementById("modalshirt");

    // Get the button that opens the modal
    var buttons = document.querySelectorAll(".showshirt-model");

    // Get the <span> element that closes the modal
    var span = document.querySelector(".closeshirt");

    // When the user clicks the button, open the modal 
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            modal.style.display = "block";
        });
    });

    // When the user clicks on <span> (x), close the modal
    span.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});

