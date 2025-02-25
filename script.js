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
            heroTitle: "AI-Powered Landing Page",
            heroText: "Build and deploy a website in minutes, powered by AI.",
            learnMore: "Learn More",
            fastFree: "Fast & Free",
            feature1: "Instantly deploy a landing page using AI.",
            customizable: "Fully Customizable",
            feature2: "Modify text, colors, and layout easily.",
            secureHosting: "Hosted on GitHub",
            feature3: "Reliable, free, and secure hosting.",
            getStarted: "Get Started",
            newsletter: "Subscribe to Our Newsletter",
            subscribe: "Subscribe"
        },
        fil: {
            features: "Mga Tampok",
            pricing: "Presyo",
            testimonials: "Mga Testimonial",
            contact: "Makipag-ugnayan",
            heroTitle: "AI-Powered Landing Page",
            heroText: "Gumawa at mag-deploy ng website sa loob ng ilang minuto, gamit ang AI.",
            learnMore: "Matuto Pa",
            fastFree: "Mabilis at Libre",
            feature1: "Agad na mag-deploy ng landing page gamit ang AI.",
            customizable: "Ganap na Naiaangkop",
            feature2: "Madaling baguhin ang teksto, kulay, at layout.",
            secureHosting: "Naka-host sa GitHub",
            feature3: "Maaasahan, libre, at ligtas na hosting.",
            getStarted: "Magsimula",
            newsletter: "Mag-subscribe sa Aming Newsletter",
            subscribe: "Mag-subscribe"
        }
    };

    function changeLanguage(lang) {
        document.querySelector("[data-lang='features']").textContent = translations[lang].features;
        document.querySelector("[data-lang='pricing']").textContent = translations[lang].pricing;
        document.querySelector("[data-lang='testimonials']").textContent = translations[lang].testimonials;
        document.querySelector("[data-lang='contact']").textContent = translations[lang].contact;
        document.querySelector("[data-lang='heroTitle']").textContent = translations[lang].heroTitle;
        document.querySelector("[data-lang='heroText']").textContent = translations[lang].heroText;
        document.querySelector("[data-lang='learnMore']").textContent = translations[lang].learnMore;
        document.querySelector("[data-lang='fastFree']").textContent = translations[lang].fastFree;
        document.querySelector("[data-lang='feature1']").textContent = translations[lang].feature1;
        document.querySelector("[data-lang='customizable']").textContent = translations[lang].customizable;
        document.querySelector("[data-lang='feature2']").textContent = translations[lang].feature2;
        document.querySelector("[data-lang='secureHosting']").textContent = translations[lang].secureHosting;
        document.querySelector("[data-lang='feature3']").textContent = translations[lang].feature3;
        document.querySelector("[data-lang='getStarted']").textContent = translations[lang].getStarted;
        document.querySelector("[data-lang='newsletter']").textContent = translations[lang].newsletter;
        document.querySelector("[data-lang='subscribe']").textContent = translations[lang].subscribe;

        localStorage.setItem("selectedLanguage", lang);
    }

    window.changeLanguage = changeLanguage;

    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    changeLanguage(savedLanguage);
});
