// Original functionality
document.addEventListener('DOMContentLoaded', function() {
    // Enlarge text size
    window.increaseTextSize = function() {
        document.body.style.fontSize = "larger";
    };

    // Toggle color scheme
    window.toggleColors = function() {
        document.body.classList.toggle("alt-colors");
    };

    // Display alt text for images
    document.getElementById("showAltText").addEventListener("click", function() {
        const images = document.querySelectorAll(".gallery img");
        images.forEach(img => {
            alert(img.alt);
        });
    });

    // New navigation functionality
    const navLinks = document.querySelectorAll('.nav-list a');
    
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
        
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    // Add this to your existing script.js file

function handleSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Clear the form
    event.target.reset();
    
    return false;
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
});