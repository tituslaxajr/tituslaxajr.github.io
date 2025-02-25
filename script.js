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

    // Language Support
    const translations = {
        en: {
            features: "Features",
            pricing: "Pricing",
            testimonials: "Testimonials",
            contact: "Contact",
            hero-title: "AI-Powered Landing Page",
            hero-text: "Build and deploy a website in minutes, powered by AI.",
            learn-more: "Learn More",
            fast-free: "Fast & Free",
            feature-1: "Instantly deploy a landing page using AI.",
            customizable: "Fully Customizable",
            feature-2: "Modify text, colors, and layout easily.",
            secure-hosting: "Hosted on GitHub",
            feature-3: "Reliable, free, and secure hosting.",
            get-started: "Get Started",
            newsletter: "Subscribe to Our Newsletter",
            subscribe: "Subscribe"
        },
        fil: {
            features: "Mga Tampok",
            pricing: "Presyo",
            testimonials: "Mga Testimonial",
            contact: "Makipag-ugnayan",
            hero-title: "AI-Powered Landing Page",
            hero-text: "Gumawa at mag-deploy ng website sa loob ng ilang minuto, gamit ang AI.",
            learn-more: "Matuto Pa",
            fast-free: "Mabilis at Libre",
            feature-1: "Agad na mag-deploy ng landing page gamit ang AI.",
            customizable: "Ganap na Naiaangkop",
            feature-2: "Madaling baguhin ang teksto, kulay, at layout.",
            secure-hosting: "Naka-host sa GitHub",
            feature-3: "Maaasahan, libre, at ligtas na hosting.",
            get-started: "Magsimula",
            newsletter: "Mag-subscribe sa Aming Newsletter",
            subscribe: "Mag-subscribe"
        }
    };

    window.changeLanguage = function (lang) {
        document.querySelectorAll("[data-lang]").forEach(el => {
            el.textContent = translations[lang][el.dataset.lang];
        });
    };
});
