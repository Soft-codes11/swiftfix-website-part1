document.addEventListener('DOMContentLoaded', () => {
    const debugMode = window.location.search.includes('debug');
    const debugPanel = debugMode ? document.createElement('div') : null;
    const refreshDebugPanel = () => {
        if (!debugPanel) return;
        const list = debugPanel.querySelector('ul');
        list.innerHTML = window.debugLogs.slice(-5).map(msg => `<li>${msg}</li>`).join('');
    };
    const logDebug = message => {
        window.debugLogs = window.debugLogs || [];
        window.debugLogs.push(message);
        console.log('SWIFTFIX NAV:', message);
        refreshDebugPanel();
    };
    if (debugPanel) {
        debugPanel.id = 'debug-panel';
        debugPanel.innerHTML = '<strong>Debug logs</strong><ul></ul>';
        document.body.append(debugPanel);
    }

    const navToggle = document.querySelector('.nav-toggle');
    const primaryNav = document.querySelector('.primary-navigation');
    if (navToggle && primaryNav) {
        logDebug('nav init: found navToggle and primaryNav');
        navToggle.addEventListener('click', event => {
            event.stopPropagation();
            const expanded = navToggle.getAttribute('aria-expanded') === 'true';
            const newState = !expanded;
            logDebug(`hamburger clicked - expanded: ${expanded} -> ${newState}`);
            navToggle.setAttribute('aria-expanded', String(newState));
            primaryNav.classList.toggle('open');
        });
        const navLinks = Array.from(primaryNav.querySelectorAll('a.nav-link'));
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                logDebug(`nav link clicked: ${link.getAttribute('href')}`);
                if (primaryNav.classList.contains('open')) {
                    navToggle.setAttribute('aria-expanded', 'false');
                    primaryNav.classList.remove('open');
                }
            });
        });

        document.addEventListener('click', event => {
            const inHeader = !!event.target.closest('.site-header');
            const isOpen = primaryNav.classList.contains('open');
            logDebug(`document click - target: ${event.target.tagName}, inHeader: ${inHeader}, menuOpen: ${isOpen}`);
            if (!inHeader && isOpen) {
                navToggle.setAttribute('aria-expanded', 'false');
                primaryNav.classList.remove('open');
            }
        });
    }
    const serviceSearch = document.getElementById('serviceSearch');
    if (serviceSearch) {
        const cards = Array.from(document.querySelectorAll('.service-card'));
        const emptyState = document.getElementById('searchEmpty');
        const filterServices = () => {
            const query = serviceSearch.value.trim().toLowerCase();
            let visibleCount = 0;
            cards.forEach(card => {
                const service = card.dataset.service.toLowerCase();
                const description = card.dataset.description.toLowerCase();
                const match = service.includes(query) || description.includes(query);
            card.style.display = match ? 'grid' : 'none';
            if (match) visibleCount += 1;
        });
        emptyState.classList.toggle('visible', visibleCount === 0);
    };
        serviceSearch.addEventListener('input', filterServices);
    }
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        const fullName = document.getElementById('fullName');
        const emailAddress = document.getElementById('emailAddress');
        const phoneNumber = document.getElementById('phoneNumber');
        const serviceType = document.getElementById('serviceType');
        const serviceMessage = document.getElementById('serviceMessage');
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const phoneError = document.getElementById('phoneError');
        const serviceError = document.getElementById('serviceError');
        const messageError = document.getElementById('messageError');
        const feedback = enquiryForm.querySelector('.form-feedback');
        const validateEmail = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        const validatePhone = value => {
            const cleaned = value.replace(/[\s-]/g, '');
            return /^(?:\+27|0)\d{9}$/.test(cleaned);
        };
        const showError = (element, messageElement, message) => {
            element.setAttribute('aria-invalid', 'true');
            messageElement.textContent = message;
            messageElement.classList.add('active');
            return false;
        };
        const clearError = (element, messageElement) => {
            element.removeAttribute('aria-invalid');
            messageElement.classList.remove('active');
            messageElement.textContent = '';
            return true;
        };
        const validateField = field => {
            const value = field.value.trim();
            if (field === fullName) {
                return value ? clearError(field, nameError) : showError(field, nameError, 'Please enter your full name.');
            }
            if (field === emailAddress) {
                return value && validateEmail(value) ? clearError(field, emailError) : showError(field, emailError, 'Enter a valid email address.');
            }
            if (field === phoneNumber) {
                return value && validatePhone(value) ? clearError(field, phoneError) : showError(field, phoneError, 'Enter a valid South African phone number.');
            }
            if (field === serviceType) {
                return value ? clearError(field, serviceError) : showError(field, serviceError, 'Please select a service type.');
            }
            if (field === serviceMessage) {
                return value ? clearError(field, messageError) : showError(field, messageError, 'Please tell us what needs attention.');
            }
            return true;
        };
        [fullName, emailAddress, phoneNumber, serviceType, serviceMessage].forEach(field => {
            field.addEventListener('input', () => validateField(field));
        });
        enquiryForm.addEventListener('submit', event => {
            event.preventDefault();
            const valid = [fullName, emailAddress, phoneNumber, serviceType, serviceMessage].every(validateField);
            if (!valid) {
                feedback.textContent = 'Please correct the highlighted fields before submitting.';
                feedback.className = 'form-feedback error';
                feedback.style.display = 'block';
                return;
            }
            feedback.textContent = 'Thank you! Your enquiry has been submitted and our Pretoria team will contact you soon.';
            feedback.className = 'form-feedback success';
            feedback.style.display = 'block';
            enquiryForm.reset();
        });
    }
    const galleryCards = Array.from(document.querySelectorAll('.gallery-card'));
    const lightbox = document.querySelector('.lightbox');
    if (galleryCards.length && lightbox) {
        const lightboxImage = lightbox.querySelector('.lightbox-image');
        const lightboxCaption = lightbox.querySelector('.lightbox-caption');
        const closeButton = lightbox.querySelector('.lightbox-close');
        const prevButton = lightbox.querySelector('.lightbox-prev');
        const nextButton = lightbox.querySelector('.lightbox-next');
        const galleryData = galleryCards.map(card => ({
            src: card.dataset.full,
            alt: card.dataset.alt,
            caption: card.dataset.caption
        }));
        let currentIndex = 0;
        const openLightbox = index => {
            const activeIndex = (index + galleryData.length) % galleryData.length;
            currentIndex = activeIndex;
            const item = galleryData[activeIndex];
            lightboxImage.src = item.src;
            lightboxImage.alt = item.alt;
            lightboxCaption.textContent = item.caption;
            lightbox.classList.add('open');
            lightbox.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        };
        const closeLightbox = () => {
            lightbox.classList.remove('open');
            lightbox.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        };
        const showSlide = index => openLightbox(index);
        galleryCards.forEach((card, index) => {
            card.addEventListener('click', () => openLightbox(index));
            card.addEventListener('keydown', event => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openLightbox(index);
                }
            });
        });
        closeButton.addEventListener('click', closeLightbox);
        prevButton.addEventListener('click', () => showSlide(currentIndex - 1));
        nextButton.addEventListener('click', () => showSlide(currentIndex + 1));
        lightbox.addEventListener('click', event => {
            if (event.target === lightbox) {
                closeLightbox();
            }
        });
        document.addEventListener('keydown', event => {
            if (!lightbox.classList.contains('open')) return;
            if (event.key === 'Escape') closeLightbox();
            if (event.key === 'ArrowLeft') showSlide(currentIndex - 1);
            if (event.key === 'ArrowRight') showSlide(currentIndex + 1);
        });
    }
});
