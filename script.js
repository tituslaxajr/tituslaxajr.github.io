document.addEventListener("DOMContentLoaded", function () {
    // Smooth fade-in animation
    const fadeElements = document.querySelectorAll(".fade-in");
    
    function fadeInOnScroll() {
        fadeElements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
                el.classList.add("visible");
            }
        });
    }
    
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();

    // Contact Form Handling
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        
        if (name && email && message) {
            document.getElementById("form-response").innerText = "Thank you! We'll get back to you soon.";
            document.getElementById("form-response").style.color = "green";
        } else {
            document.getElementById("form-response").innerText = "Please fill out all fields.";
            document.getElementById("form-response").style.color = "red";
        }
        
        this.reset();
    });
});
