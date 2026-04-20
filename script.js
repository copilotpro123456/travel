// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Search and Filter Functionality
const searchInput = document.getElementById('searchInput');
const priceFilter = document.getElementById('priceFilter');
const durationFilter = document.getElementById('durationFilter');
const typeFilter = document.getElementById('typeFilter');
const packagesGrid = document.querySelector('.packages-grid');

// Add no results message
const noResults = document.createElement('div');
noResults.className = 'no-results';
noResults.innerHTML = '<i class="fas fa-search"></i><p>No packages found matching your criteria</p>';
packagesGrid.parentElement.appendChild(noResults);

function filterPackages() {
    const searchTerm = searchInput.value.toLowerCase();
    const priceValue = priceFilter.value;
    const durationValue = durationFilter.value;
    const typeValue = typeFilter.value;
    
    let visibleCount = 0;
    
    document.querySelectorAll('.package-card').forEach(card => {
        const packageName = card.querySelector('h3').textContent.toLowerCase();
        const packageDesc = card.querySelector('.description').textContent.toLowerCase();
        const cardPrice = card.getAttribute('data-price');
        const cardDuration = card.getAttribute('data-duration');
        const cardType = card.getAttribute('data-type');
        
        // Check search term
        const matchesSearch = packageName.includes(searchTerm) || packageDesc.includes(searchTerm);
        
        // Check filters
        const matchesPrice = !priceValue || cardPrice === priceValue;
        const matchesDuration = !durationValue || cardDuration === durationValue;
        const matchesType = !typeValue || cardType === typeValue;
        
        if (matchesSearch && matchesPrice && matchesDuration && matchesType) {
            card.classList.remove('hidden');
            visibleCount++;
        } else {
            card.classList.add('hidden');
        }
    });
    
    // Show/hide no results message
    if (visibleCount === 0) {
        noResults.classList.add('active');
    } else {
        noResults.classList.remove('active');
    }
}

// Event listeners for filters
searchInput.addEventListener('input', filterPackages);
priceFilter.addEventListener('change', filterPackages);
durationFilter.addEventListener('change', filterPackages);
typeFilter.addEventListener('change', filterPackages);

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Booking Modal Functions
const bookingModal = document.getElementById('bookingModal');
const selectedPackageElement = document.getElementById('selectedPackage');
const bookingForm = document.getElementById('bookingForm');

function openBooking(packageName) {
    selectedPackageElement.textContent = `Package: ${packageName}`;
    bookingModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeBooking() {
    bookingModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
bookingModal.addEventListener('click', (e) => {
    if (e.target === bookingModal) {
        closeBooking();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && bookingModal.classList.contains('active')) {
        closeBooking();
    }
});

// Set minimum date to today
const dateInput = document.getElementById('date');
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);

// Booking Form Submission
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const travelDate = document.getElementById('date').value;
    const people = document.getElementById('people').value;
    const requirements = document.getElementById('requirements').value;
    const packageName = selectedPackageElement.textContent;
    
    // Create booking object
    const booking = {
        packageName: packageName,
        name: name,
        email: email,
        phone: phone,
        travelDate: travelDate,
        people: people,
        requirements: requirements,
        bookingId: 'IIT' + Date.now(),
        bookingDate: new Date().toLocaleString()
    };
    
    // Save to localStorage (in real app, this would go to a server)
    let bookings = JSON.parse(localStorage.getItem('tourBookings') || '[]');
    bookings.push(booking);
    localStorage.setItem('tourBookings', JSON.stringify(bookings));
    
    // Show success message
    showSuccessMessage(`Thank you ${name}! Your booking request has been submitted successfully. Booking ID: ${booking.bookingId}`);
    
    // Reset form and close modal
    bookingForm.reset();
    setTimeout(() => {
        closeBooking();
    }, 2000);
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(contactForm);
    const contactData = {
        name: contactForm.querySelector('input[type="text"]').value,
        email: contactForm.querySelector('input[type="email"]').value,
        phone: contactForm.querySelector('input[type="tel"]').value,
        package: contactForm.querySelector('select').value,
        message: contactForm.querySelector('textarea').value,
        submittedAt: new Date().toLocaleString()
    };
    
    // Save to localStorage
    let contacts = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    contacts.push(contactData);
    localStorage.setItem('contactMessages', JSON.stringify(contacts));
    
    // Show success message
    showSuccessMessage('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// Success Message Function
function showSuccessMessage(message) {
    // Remove existing success messages
    const existingMessage = document.querySelector('.success-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create success message element
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    
    // Add to body or appropriate container
    document.body.appendChild(successDiv);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Animate elements on scroll
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

// Observe package cards
document.querySelectorAll('.package-card, .destination-card, .feature-box').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Package card click animation
document.querySelectorAll('.package-card').forEach(card => {
    card.addEventListener('click', function(e) {
        if (!e.target.closest('.btn-book')) {
            this.style.transform = 'scale(1.02)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        }
    });
});

// Counter animation for stats (optional feature)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start).toLocaleString();
        }
    }, 16);
}

// Load saved bookings (for demo purposes)
console.log('Saved Bookings:', JSON.parse(localStorage.getItem('tourBookings') || '[]'));
console.log('Contact Messages:', JSON.parse(localStorage.getItem('contactMessages') || '[]'));

// Add loading animation for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
    });
});

// WhatsApp integration (optional)
function sendToWhatsApp() {
    const phoneNumber = '+919876543210';
    const message = 'Hello, I am interested in booking a tour package. Please provide more details.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Print booking confirmation (optional feature)
function printBooking(bookingId) {
    const bookings = JSON.parse(localStorage.getItem('tourBookings') || '[]');
    const booking = bookings.find(b => b.bookingId === bookingId);
    
    if (booking) {
        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write(`
            <html><head><title>Booking Confirmation</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 40px; }
                h1 { color: #667eea; }
                .booking-details { background: #f8f9fa; padding: 20px; border-radius: 10px; margin-top: 20px; }
                .detail-row { margin: 10px 0; }
                .label { font-weight: bold; color: #333; }
            </style>
            </head><body>
                <h1>Booking Confirmation</h1>
                <div class="booking-details">
                    <div class="detail-row"><span class="label">Booking ID:</span> ${booking.bookingId}</div>
                    <div class="detail-row"><span class="label">Package:</span> ${booking.packageName}</div>
                    <div class="detail-row"><span class="label">Name:</span> ${booking.name}</div>
                    <div class="detail-row"><span class="label">Email:</span> ${booking.email}</div>
                    <div class="detail-row"><span class="label">Phone:</span> ${booking.phone}</div>
                    <div class="detail-row"><span class="label">Travel Date:</span> ${booking.travelDate}</div>
                    <div class="detail-row"><span class="label">Number of People:</span> ${booking.people}</div>
                    <div class="detail-row"><span class="label">Special Requirements:</span> ${booking.requirements || 'None'}</div>
                    <div class="detail-row"><span class="label">Booking Date:</span> ${booking.bookingDate}</div>
                </div>
                <p style="margin-top: 30px; color: #27ae60;">Thank you for booking with Incredible India Tours!</p>
            </body></html>
        `);
        printWindow.document.close();
        printWindow.print();
    }
}

console.log('Incredible India Tours Website Loaded Successfully! 🇮🇳');
