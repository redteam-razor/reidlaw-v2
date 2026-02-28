// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 30px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)';
    }
    
    lastScroll = currentScroll;
});

// Parallax effect for hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    if (heroImage && scrolled < window.innerHeight) {
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Form submission
document.getElementById('queryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        queryType: document.getElementById('queryType').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toISOString()
    };
    
    console.log('Query submitted:', formData);
    
    // Hide form with fade
    const form = this;
    form.style.opacity = '0';
    form.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        form.style.display = 'none';
        const successMsg = document.getElementById('successMessage');
        successMsg.style.display = 'block';
        successMsg.style.opacity = '0';
        successMsg.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            successMsg.style.transition = 'all 0.5s ease';
            successMsg.style.opacity = '1';
            successMsg.style.transform = 'translateY(0)';
        }, 50);
        
        // Scroll to success message
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
    
    // Reset after 10 seconds
    setTimeout(() => {
        const successMsg = document.getElementById('successMessage');
        successMsg.style.opacity = '0';
        
        setTimeout(() => {
            form.reset();
            form.style.display = 'block';
            form.style.transition = 'all 0.5s ease';
            setTimeout(() => {
                form.style.opacity = '1';
                form.style.transform = 'translateY(0)';
            }, 50);
            successMsg.style.display = 'none';
        }, 300);
    }, 10000);
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-detail-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Service item hover effect
document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.borderLeftColor = 'var(--accent)';
        this.style.borderLeftWidth = '4px';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.borderLeftWidth = '0';
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
