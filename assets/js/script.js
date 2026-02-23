document.addEventListener("DOMContentLoaded", () => {
    // Gallery Filtering Logic
    const filterBtns = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");
    const searchInput = document.getElementById("gallery-search");

    const filterGallery = () => {
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : "";
        let activeFilter = "all";

        filterBtns.forEach(btn => {
            if (btn.classList.contains("active")) {
                activeFilter = btn.getAttribute("data-filter");
            }
        });

        galleryItems.forEach(item => {
            const isMatchFilter = activeFilter === "all" || item.classList.contains(activeFilter);
            const isMatchSearch = item.getAttribute("data-caption")?.toLowerCase().includes(searchTerm) || false;

            if (isMatchFilter && (searchTerm === "" || isMatchSearch)) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        });
    };

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                // Remove active styling from all
                filterBtns.forEach(b => {
                    b.classList.remove("active");
                    b.classList.remove("bg-[#fac638]");
                    b.classList.add("bg-[#f4f0e6]");
                });
                // Add active styling to clicked button
                btn.classList.add("active");
                btn.classList.add("bg-[#fac638]");
                btn.classList.remove("bg-[#f4f0e6]");

                filterGallery();
            });
        });
    }

    if (searchInput) {
        searchInput.addEventListener("input", filterGallery);
    }

    // Initialize Fancybox if the library is loaded
    if (typeof window.Fancybox !== "undefined") {
        window.Fancybox.bind('[data-fancybox="gallery"]', {
            // Configuration options
            Toolbar: {
                display: {
                    left: ["infobar"],
                    middle: [],
                    right: ["slideshow", "thumbs", "close"],
                },
            },
        });
    }

    // Hero carousel script
    const heroImages = [
        "assets/images/hero/hero_image1.webp",
        "assets/images/hero/hero_image2.webp",
        "assets/images/hero/hero_image3.webp"
    ];
    let current = 0;
    const heroSection = document.getElementById("hero-section");

    // Testimonials Carousel Logic
    const testimonialsContainer = document.getElementById("testimonials-container");
    const prevBtn = document.getElementById("prev-testimonial");
    const nextBtn = document.getElementById("next-testimonial");
    const dots = document.querySelectorAll("#testimonial-dots div");

    if (testimonialsContainer && prevBtn && nextBtn) {
        const scrollAmount = 300; // Approximate width of one card + gap
        let currentIndex = 0;

        const updateDots = (index) => {
            dots.forEach((dot, i) => {
                if (i === index) {
                    dot.classList.remove("bg-[#e9e2ce]");
                    dot.classList.add("bg-[#fac638]");
                } else {
                    dot.classList.add("bg-[#e9e2ce]");
                    dot.classList.remove("bg-[#fac638]");
                }
            });
        };

        nextBtn.addEventListener("click", () => {
            testimonialsContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
            currentIndex = Math.min(currentIndex + 1, dots.length - 1);
            updateDots(currentIndex);
        });

        prevBtn.addEventListener("click", () => {
            testimonialsContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            currentIndex = Math.max(currentIndex - 1, 0);
            updateDots(currentIndex);
        });

        // Optional dot clicking
        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                const scrollPos = index * scrollAmount;
                testimonialsContainer.scrollTo({ left: scrollPos, behavior: "smooth" });
                currentIndex = index;
                updateDots(currentIndex);
            });
        });

        // Simple Auto-play functionality
        setInterval(() => {
            if (currentIndex >= dots.length - 1) {
                currentIndex = 0;
                testimonialsContainer.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                currentIndex++;
                testimonialsContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
            updateDots(currentIndex);
        }, 5000);
    }

    // FAQ Accordion Logic
    const faqContainer = document.getElementById("faq-container");
    if (faqContainer) {
        const detailsElements = faqContainer.querySelectorAll("details");
        detailsElements.forEach((targetDetail) => {
            targetDetail.addEventListener("click", () => {
                // Remove 'open' attribute from other details
                detailsElements.forEach((detail) => {
                    if (detail !== targetDetail) {
                        detail.removeAttribute("open");
                    }
                });
            });
        });
    }

    // EmailJS Contact Form Logic
    const contactForm = document.getElementById("contact-form");
    const contactStatus = document.getElementById("contact-status");

    if (contactForm && typeof window.emailjs !== "undefined") {
        // Initialize EmailJS with a placeholder public key (user will need to replace)
        window.emailjs.init("YOUR_PUBLIC_KEY"); // Replace with actual public key

        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            contactStatus.classList.remove("hidden");
            contactStatus.classList.remove("text-red-600", "text-green-600");
            contactStatus.classList.add("text-[#9e8747]");
            contactStatus.innerText = "Sending message...";

            // Generate a random ID or parameter mapping if needed, 
            // but sendForm automatically grabs name attributes.
            const btn = document.getElementById("contact-submit");
            const originalText = btn.innerText;
            btn.innerText = "Sending...";
            btn.disabled = true;

            // Replace with actual service ID and template ID
            window.emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
                .then(() => {
                    contactStatus.classList.remove("text-[#9e8747]");
                    contactStatus.classList.add("text-green-600");
                    contactStatus.innerText = "Message sent successfully!";
                    contactForm.reset();

                    btn.innerText = originalText;
                    btn.disabled = false;

                    setTimeout(() => {
                        contactStatus.classList.add("hidden");
                    }, 5000);
                }, (error) => {
                    console.error("EmailJS Error:", error);
                    contactStatus.classList.remove("text-[#9e8747]");
                    contactStatus.classList.add("text-red-600");
                    contactStatus.innerText = "Failed to send. Please try again later.";

                    btn.innerText = originalText;
                    btn.disabled = false;
                });
        });
    }
});
