document.getElementById('exploreBtn').addEventListener('click', () => {
    alert('Explore more features coming soon!');
});

// Dynamic navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 50) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

// Form validation feedback
const form = document.getElementById('contactForm');
form.addEventListener('submit', (event) => {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
        event.preventDefault();
        alert('All fields are required. Please fill them out.');
    } else {
        alert('Thank you for your message!');
    }
});
