// Netflix Clone - JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Email form validation and submission
    const emailForms = document.querySelectorAll('.email-form');
    
    emailForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = form.querySelector('.email-input');
            const email = emailInput.value.trim();
            
            if (validateEmail(email)) {
                // Simulate form submission with animation
                const button = form.querySelector('.get-started-btn');
                button.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    button.style.transform = '';
                    alert('Thank you! We will send you information about Netflix membership.');
                    emailInput.value = '';
                }, 150);
            } else {
                // Shake animation for invalid email
                emailInput.style.animation = 'shake 0.5s';
                setTimeout(() => {
                    emailInput.style.animation = '';
                }, 500);
                emailInput.focus();
            }
        });
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });

    // Trending cards hover and click effects
    const trendingCards = document.querySelectorAll('.trending-card');
    
    trendingCards.forEach((card, index) => {
        // Enhanced hover effect
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
            // Add slight delay for smooth animation
            setTimeout(() => {
                this.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            }, 50);
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });

        // Play button click
        const playButton = card.querySelector('.play-button');
        if (playButton) {
            playButton.addEventListener('click', function(e) {
                e.stopPropagation();
                const cardTitle = card.querySelector('.card-title').textContent;
                
                // Button animation
                this.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
                
                // Simulate play action
                console.log(`Playing: ${cardTitle}`);
            });
        }

        // Card click (for future navigation)
        card.addEventListener('click', function(e) {
            if (e.target.closest('.play-button')) return;
            const cardTitle = this.querySelector('.card-title').textContent;
            console.log(`Selected: ${cardTitle}`);
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Navbar scroll effect
    let lastScroll = 0;
    const header = document.querySelector('.header');
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.backgroundColor = 'transparent';
            navbar.style.backdropFilter = 'none';
        }
        
        lastScroll = currentScroll;
    });

    // Sign In button functionality
    const signInBtn = document.querySelector('.signin-btn');
    if (signInBtn) {
        signInBtn.addEventListener('click', function() {
            // Button animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            console.log('Sign In clicked');
        });
    }

    // Trending container with arrow controls
    const trendingContainer = document.querySelector('.trending-container');
    const scrollLeftBtn = document.querySelector('.scroll-arrow-left');
    const scrollRightBtn = document.querySelector('.scroll-arrow-right');
    
    if (trendingContainer && scrollLeftBtn && scrollRightBtn) {
        // Function to update arrow visibility
        function updateArrowVisibility() {
            const container = trendingContainer;
            const scrollLeft = container.scrollLeft;
            const scrollWidth = container.scrollWidth;
            const clientWidth = container.clientWidth;
            const maxScroll = scrollWidth - clientWidth;
            
            // Show/hide left arrow
            if (scrollLeft <= 10) {
                scrollLeftBtn.classList.add('hidden');
            } else {
                scrollLeftBtn.classList.remove('hidden');
            }
            
            // Show/hide right arrow
            if (scrollLeft >= maxScroll - 10) {
                scrollRightBtn.classList.add('hidden');
            } else {
                scrollRightBtn.classList.remove('hidden');
            }
        }
        
        // Initial arrow visibility (with small delay to ensure DOM is ready)
        setTimeout(updateArrowVisibility, 100);
        
        // Also update after images load
        window.addEventListener('load', updateArrowVisibility);
        
        // Scroll amount calculation (scroll by approximately 80% of container width)
        function getScrollAmount() {
            const cardWidth = trendingContainer.querySelector('.trending-card')?.offsetWidth || 200;
            const gap = 8; // gap between cards in pixels
            return cardWidth + gap;
        }
        
        // Left arrow click
        scrollLeftBtn.addEventListener('click', function() {
            const scrollAmount = getScrollAmount();
            trendingContainer.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
        
        // Right arrow click
        scrollRightBtn.addEventListener('click', function() {
            const scrollAmount = getScrollAmount();
            trendingContainer.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
        
        // Update arrows on scroll
        trendingContainer.addEventListener('scroll', updateArrowVisibility);
        
        // Update arrows on resize
        let resizeTimeout;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(updateArrowVisibility, 150);
        });
        
        // Drag to scroll functionality (for touch devices)
        let isDown = false;
        let startX;
        let scrollLeft;

        trendingContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            trendingContainer.style.cursor = 'grabbing';
            startX = e.pageX - trendingContainer.offsetLeft;
            scrollLeft = trendingContainer.scrollLeft;
        });

        trendingContainer.addEventListener('mouseleave', () => {
            isDown = false;
            trendingContainer.style.cursor = 'grab';
        });

        trendingContainer.addEventListener('mouseup', () => {
            isDown = false;
            trendingContainer.style.cursor = 'grab';
        });

        trendingContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - trendingContainer.offsetLeft;
            const walk = (x - startX) * 2;
            trendingContainer.scrollLeft = scrollLeft - walk;
            updateArrowVisibility();
        });

        // Touch support for mobile
        let touchStartX = 0;
        let touchScrollLeft = 0;

        trendingContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].pageX - trendingContainer.offsetLeft;
            touchScrollLeft = trendingContainer.scrollLeft;
        });

        trendingContainer.addEventListener('touchmove', (e) => {
            if (!touchStartX) return;
            const x = e.touches[0].pageX - trendingContainer.offsetLeft;
            const walk = (x - touchStartX) * 2;
            trendingContainer.scrollLeft = touchScrollLeft - walk;
            updateArrowVisibility();
        });
        
        trendingContainer.addEventListener('touchend', () => {
            touchStartX = 0;
        });
    }

    // Add shake animation for invalid email
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(style);

    // Intersection Observer for fade-in animations
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe benefit cards
        document.querySelectorAll('.benefit-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }
});
