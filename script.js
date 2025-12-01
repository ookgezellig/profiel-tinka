/* PPF APG Profiel - Interactive Features */

document.addEventListener('DOMContentLoaded', function() {

    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const htmlElement = document.documentElement;

    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    } else if (systemPrefersDark) {
        htmlElement.setAttribute('data-theme', 'dark');
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);

            // Announce change for screen readers
            const announcement = newTheme === 'dark' ? 'Donkere modus ingeschakeld' : 'Lichte modus ingeschakeld';
            const ariaLive = document.createElement('div');
            ariaLive.setAttribute('role', 'status');
            ariaLive.setAttribute('aria-live', 'polite');
            ariaLive.className = 'sr-only';
            ariaLive.textContent = announcement;
            document.body.appendChild(ariaLive);
            setTimeout(() => ariaLive.remove(), 1000);
        });
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            htmlElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        }
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
                // Update URL without jumping
                history.pushState(null, null, this.getAttribute('href'));
            }
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe sections and cards
    document.querySelectorAll('h2, .info-card, .gallery-item, .highlight-box, table').forEach(el => {
        el.classList.add('animate-ready');
        observer.observe(el);
    });

    // Gallery and carousel image lightbox
    const galleryImages = document.querySelectorAll('.gallery-item img, .carousel-slide img');
    galleryImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.setAttribute('tabindex', '0');
        img.setAttribute('role', 'button');
        img.setAttribute('aria-label', 'Klik om te vergroten: ' + (img.alt || 'afbeelding'));

        const openLightbox = () => {
            // Get caption and visual-alt from the parent figure
            const figure = img.closest('figure');
            const figcaption = figure ? figure.querySelector('figcaption') : null;
            let captionText = '';
            let visualAltText = '';

            if (figcaption) {
                // Get the main caption text (excluding visual-alt)
                const captionClone = figcaption.cloneNode(true);
                const visualAlt = captionClone.querySelector('.visual-alt');
                if (visualAlt) {
                    visualAltText = visualAlt.textContent;
                    visualAlt.remove();
                }
                captionText = captionClone.textContent.trim();
            }

            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.setAttribute('role', 'dialog');
            lightbox.setAttribute('aria-modal', 'true');
            lightbox.setAttribute('aria-label', 'Afbeelding vergroot');
            lightbox.innerHTML = `
                <button class="lightbox-close" aria-label="Sluiten">&times;</button>
                <div class="lightbox-content">
                    <img src="${img.src}" alt="${img.alt}">
                    ${captionText || visualAltText ? `
                        <div class="lightbox-caption">
                            ${captionText ? `<p class="lightbox-title">${captionText}</p>` : ''}
                            ${visualAltText ? `<p class="lightbox-visual-alt">${visualAltText}</p>` : ''}
                        </div>
                    ` : ''}
                </div>
            `;
            document.body.appendChild(lightbox);
            document.body.style.overflow = 'hidden';

            // Focus trap
            const closeBtn = lightbox.querySelector('.lightbox-close');
            closeBtn.focus();

            const closeLightbox = () => {
                lightbox.classList.add('lightbox-closing');
                setTimeout(() => {
                    document.body.removeChild(lightbox);
                    document.body.style.overflow = '';
                    img.focus();
                }, 200);
            };

            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
                    closeLightbox();
                }
            });

            document.addEventListener('keydown', function escHandler(e) {
                if (e.key === 'Escape') {
                    closeLightbox();
                    document.removeEventListener('keydown', escHandler);
                }
            });

            // Animate in
            requestAnimationFrame(() => {
                lightbox.classList.add('lightbox-visible');
            });
        };

        img.addEventListener('click', openLightbox);
        img.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox();
            }
        });
    });

    // Award badge sparkle effect
    const awardBadges = document.querySelectorAll('.award-badge');
    awardBadges.forEach(badge => {
        badge.addEventListener('mouseenter', () => {
            badge.classList.add('sparkle');
        });
        badge.addEventListener('mouseleave', () => {
            badge.classList.remove('sparkle');
        });
    });

    // Reading progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.setAttribute('role', 'progressbar');
    progressBar.setAttribute('aria-label', 'Leesvoortgang');
    progressBar.setAttribute('aria-valuemin', '0');
    progressBar.setAttribute('aria-valuemax', '100');
    document.body.prepend(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        progressBar.style.width = progress + '%';
        progressBar.setAttribute('aria-valuenow', Math.round(progress));
    });

    // Back to top button
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '↑';
    backToTop.setAttribute('aria-label', 'Terug naar boven');
    backToTop.setAttribute('title', 'Terug naar boven');
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Profile card parallax effect
    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const rate = scrolled * -0.1;
            if (scrolled < 400) {
                profileCard.style.transform = `translateY(${rate}px)`;
            }
        });
    }

    // Typing effect for the main quote
    const quote = document.querySelector('.profile-card blockquote');
    if (quote) {
        const originalText = quote.textContent;
        const typingSpeed = 30;
        let charIndex = 0;

        // Only animate if element is in viewport initially
        const rect = quote.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            quote.textContent = '';
            quote.style.minHeight = '3em';

            function typeWriter() {
                if (charIndex < originalText.length) {
                    quote.textContent += originalText.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeWriter, typingSpeed);
                }
            }

            setTimeout(typeWriter, 500);
        }
    }

    // Carousel functionality
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        const track = document.getElementById('carouselTrack');
        const slides = track.querySelectorAll('.carousel-slide');
        const prevBtn = document.getElementById('carouselPrev');
        const nextBtn = document.getElementById('carouselNext');
        const dots = document.querySelectorAll('.carousel-dot');
        let currentSlide = 0;
        const totalSlides = slides.length;

        // Touch/swipe support
        let touchStartX = 0;
        let touchEndX = 0;

        function updateCarousel() {
            track.style.transform = `translateX(-${currentSlide * 100}%)`;

            // Update dots
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
                dot.setAttribute('aria-selected', index === currentSlide);
            });

            // Update ARIA for slides
            slides.forEach((slide, index) => {
                slide.setAttribute('aria-hidden', index !== currentSlide);
            });

            // Announce slide change for screen readers
            const announcement = document.createElement('div');
            announcement.setAttribute('role', 'status');
            announcement.setAttribute('aria-live', 'polite');
            announcement.className = 'sr-only';
            announcement.textContent = `Afbeelding ${currentSlide + 1} van ${totalSlides}`;
            document.body.appendChild(announcement);
            setTimeout(() => announcement.remove(), 1000);
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel();
        }

        function goToSlide(index) {
            currentSlide = index;
            updateCarousel();
        }

        // Event listeners
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => goToSlide(index));
        });

        // Keyboard navigation
        carousel.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        });

        // Touch/swipe support
        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextSlide(); // Swipe left = next
                } else {
                    prevSlide(); // Swipe right = prev
                }
            }
        }

        // Initialize
        updateCarousel();
    }

    // Console easter egg
    console.log('%c🏆 PPF APG - Pensioenfonds van het Jaar 2025',
        'font-size: 20px; color: #004899; font-weight: bold;');
    console.log('%cDit profiel is 100% AI-gegenereerd met Claude Code',
        'font-size: 12px; color: #666;');

});
