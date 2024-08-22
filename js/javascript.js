document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    var navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 56,
                behavior: 'smooth'
            });
        });
    });

    // Popup form logic
    var popup = document.getElementById("contact-popup");
    var btn = document.getElementById("contact-btn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        popup.style.display = "block";
    }

    span.onclick = function() {
        popup.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }

    // Contact form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        alert('Form submitted successfully!');
        popup.style.display = "none";
    });

    // Loader
    const loader = document.getElementById('loading');
    setTimeout(() => {
        loader.style.display = 'none';
    }, 2000); 
});
