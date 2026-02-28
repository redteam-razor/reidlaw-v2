// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling
document.getElementById('queryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        queryType: document.getElementById('queryType').value,
        message: document.getElementById('message').value
    };
    
    // Log to console (in production, this would send to a backend)
    console.log('Query submitted:', formData);
    
    // Hide form and show success message
    this.style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
    
    // Scroll to success message
    document.getElementById('successMessage').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
    
    // Reset form after 5 seconds
    setTimeout(() => {
        this.reset();
        this.style.display = 'block';
        document.getElementById('successMessage').style.display = 'none';
    }, 5000);
});

// Add active state to navigation on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});
