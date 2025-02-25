document.addEventListener("DOMContentLoaded", function () {
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

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        
        document.getElementById("form-response").innerText = "Thank you! We'll get back to you soon.";
        document.getElementById("form-response").style.color = "green";
        
        this.reset();
    });
});
