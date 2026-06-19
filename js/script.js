 // Runs once the HTML page has been fully loaded and parsed.
// This is important because we query elements from the DOM (the page) below.
document.addEventListener('DOMContentLoaded', () => {

    // --- NAVIGATION (mobile hamburger menu) ---

    // If you add ?debug to the URL, we can show internal logs to help debugging.
    // Example: index.html?debug
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

    // Navigation elements:
    // - navToggle = the hamburger button on mobile
    // - primaryNav = the menu that we show/hide
    const navToggle = document.querySelector('.nav-toggle');
    const primaryNav = document.querySelector('.primary-navigation');

    if (navToggle && primaryNav) {
        // Only run navigation code if these elements exist on the page.
        // (Some pages might not have the hamburger/menu elements.)

        logDebug('nav init: found navToggle and primaryNav');

        // When the hamburger button is clicked, open/close the navigation menu.
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
    // --- SERVICES SEARCH (services.html) ---
    // This finds services by matching the user's keywords to card text.
    const serviceSearch = document.getElementById('serviceSearch');

    if (serviceSearch) {
        const cards = Array.from(document.querySelectorAll('.service-card'));
        const emptyState = document.getElementById('searchEmpty');

        // Filter the service cards based on what the user types.
        // (This makes the services page feel faster and more user-friendly.)

        // We use both the card title and its short description for matching.
        const filterServices = () => {
            const query = serviceSearch.value.trim().toLowerCase();
            let visibleCount = 0;

            cards.forEach(card => {
                const service = (card.dataset.service || '').toLowerCase();
                const description = (card.dataset.description || '').toLowerCase();

                // Match if the query appears in either the service title or description.
                const match = service.includes(query) || description.includes(query);

                // Hide/show the card.
                card.style.display = match ? 'grid' : 'none';

                if (match) visibleCount += 1;
            });

            // If nothing matches, show the empty-state message.
            emptyState.classList.toggle('visible', visibleCount === 0);
        };

        serviceSearch.addEventListener('input', filterServices);
    }

    // --- ENQUIRY FORM VALIDATION (enquiry.html) ---
    // This validates user input (name, email, phone, service type, message)
    // and shows helpful error messages before submitting.
    const enquiryForm = document.getElementById('enquiryForm');

    // --- CONTACT FORM ENHANCEMENTS (contact.html) ---
    // Adds client-side validation, composes an email body, and prepares a mailto:
    // link so the user can send the message to the recipient defined in code.
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        const contactName = document.getElementById('contactName');
        const contactEmail = document.getElementById('contactEmail');
        const contactPhone = document.getElementById('contactPhone');
        const contactSubject = document.getElementById('contactSubject');
        const contactMessage = document.getElementById('contactMessage');

        const nameError = document.getElementById('contactNameError');
        const emailError = document.getElementById('contactEmailError');
        const phoneError = document.getElementById('contactPhoneError');
        const subjectError = document.getElementById('contactSubjectError');
        const messageError = document.getElementById('contactMessageError');

        const feedback = contactForm.querySelector('.form-feedback');
        const recipientEmail = 'info@swiftfix.co.za';

        const validateEmail = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        const validatePhone = value => {
            const cleaned = (value || '').replace(/[\s-]/g, '');
            // SA: +27 9 digits or 0 + 9 digits
            return /^(?:\+27|0)\d{9}$/.test(cleaned);
        };

        const showError = (field, errorEl, msg) => {
            field.setAttribute('aria-invalid', 'true');
            errorEl.textContent = msg;
            errorEl.classList.add('active');
        };

        const clearError = (field, errorEl) => {
            field.removeAttribute('aria-invalid');
            errorEl.classList.remove('active');
            errorEl.textContent = '';
        };

        const validate = () => {
            const nameOk = contactName.value.trim().length >= 2;
            const emailVal = contactEmail.value.trim();
            const emailOk = validateEmail(emailVal);
            const phoneOk = validatePhone(contactPhone.value.trim());
            const subjectOk = contactSubject.value.trim().length >= 3;
            const messageOk = contactMessage.value.trim().length >= 10;

            if (!nameOk) showError(contactName, nameError, 'Please enter your full name (min 2 characters).');
            else clearError(contactName, nameError);

            if (!emailOk) showError(contactEmail, emailError, 'Enter a valid email address.');
            else clearError(contactEmail, emailError);

            if (!phoneOk) showError(contactPhone, phoneError, 'Enter a valid South African phone number.');
            else clearError(contactPhone, phoneError);

            if (!subjectOk) showError(contactSubject, subjectError, 'Please enter a subject (min 3 characters).');
            else clearError(contactSubject, subjectError);

            if (!messageOk) showError(contactMessage, messageError, 'Please write a more detailed message (min 10 characters).');
            else clearError(contactMessage, messageError);

            return nameOk && emailOk && phoneOk && subjectOk && messageOk;
        };

        [contactName, contactEmail, contactPhone, contactSubject, contactMessage].forEach(el => {
            el.addEventListener('input', () => validate());
        });

        contactForm.addEventListener('submit', event => {
            event.preventDefault();

            if (!validate()) {
                feedback.textContent = 'Please correct the highlighted fields before sending.';
                feedback.className = 'form-feedback error';
                feedback.style.display = 'block';
                return;
            }

            // Simulate an AJAX-style experience (no backend in this project)
            // by showing a short “preparing email” message.
            feedback.textContent = 'Preparing your message…';
            feedback.className = 'form-feedback';
            feedback.style.display = 'block';

            const name = contactName.value.trim();
            const email = contactEmail.value.trim();
            const phone = contactPhone.value.trim();
            const subject = contactSubject.value.trim();
            const message = contactMessage.value.trim();

            const body = [
                'New contact message from SwiftFix website',
                '',
                `Name: ${name}`,
                `Email: ${email}`,
                `Phone: ${phone}`,
                `Subject: ${subject}`,
                '',
                'Message:',
                message,
                '',
                '— Sent via SwiftFix contact form'
            ].join('\n');

            const mailto = `mailto:${encodeURIComponent(recipientEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            // Minimal delay to mimic async behaviour.
            setTimeout(() => {
                feedback.textContent = 'Ready to send. Your email client should open now.';
                feedback.className = 'form-feedback success';
                feedback.style.display = 'block';
                window.location.href = mailto;
            }, 300);
        });
    }


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
    // --- GALLERY LIGHTBOX (gallery.html) ---
    // Clicking an image card opens a dark-screen popup (lightbox).
    // The lightbox supports buttons and keyboard navigation.
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
        // Add click + keyboard support on each gallery image card.
        galleryCards.forEach((card, index) => {
            card.addEventListener('click', () => openLightbox(index));
            card.addEventListener('keydown', event => {
                // Allow Enter/Space to open the lightbox (keyboard accessibility).
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


