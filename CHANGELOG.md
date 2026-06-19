# Changelog

All notable changes to the SwiftFix Plumbing Services website are documented in this file.



## [Release] - 2026-06-19 (Part 3: Contact Form Enhancements + SEO Optimisation)

### Added

* Added a dedicated contact form (`contact.html`) with improved accessibility and validation support.
* Added `id="contactForm"` and `novalidate` attributes to enable custom client-side validation.
* Added inline validation error containers for individual form fields.
* Added an ARIA live region to provide accessible feedback messages to users.
* Added client-side JavaScript validation in `js/script.js`.
* Added validation rules for:

  * Full name
  * Email address
  * South African phone number format
  * Subject length
  * Message length
* Added dynamic inline error messages and ARIA `aria-invalid` state management.
* Added mailto-based form submission handling for contact enquiries.
* Added loading and feedback messages during form submission processing.
* Added `robots.txt` to support search engine crawling.
* Added `sitemap.xml` containing all public website pages.
* Added Open Graph meta tags for improved social media sharing.
* Added Twitter Card metadata for enhanced link previews.
* Added Local Business structured data using JSON-LD (`@type: Plumber`).
* Added favicon support for improved browser and bookmark identification.
* Security hardening: Added a page-level Content Security Policy (CSP) meta tag in each page `<head>` to reduce impact of XSS/injection and restrict resource loading.
* Optimised page performance: Added CSP carefully to avoid blocking existing inline styles/scripts required for this static site, and kept validation logic lightweight to minimise client-side overhead.



### Changed

* Improved accessibility compliance through ARIA attributes and user feedback mechanisms.
* Enhanced form validation and user experience on the contact page.
* Updated sitemap URLs to use the production GitHub Pages deployment URL:
  `https://soft-codes11.github.io/swiftfix-website-part1/`
* Added canonical URL tags to improve search engine indexing consistency.
* Improved website discoverability through structured SEO enhancements.

---

## [Release] - 2026-05-26 (Part 2: CSS, Responsive Design & Interactive Features)

### Added

* Created a responsive mobile-first navigation bar with hamburger menu functionality.
* Added sticky header behaviour for improved navigation.
* Added SEO enhancements including:

  * Unique page titles
  * Meta descriptions
  * Meta keywords
  * Improved image alternative text
* Implemented a live service search filter on `services.html`.
* Added a responsive gallery page with lightbox modal functionality.
* Added keyboard navigation support for gallery accessibility.
* Built an accessible service enquiry form with client-side validation.
* Added submission feedback for enquiry form interactions.
* Embedded a responsive Google Map for the Pretoria service area.
* Added and standardised content across:

  * Home page
  * About page
  * Services page
  * Gallery page
  * Enquiry page
  * Contact page

### Changed

* Redesigned site styling with a professional plumbing business theme.
* Improved spacing, typography and visual hierarchy.
* Enhanced footer layout with responsive column structure.
* Refined navigation styling and user interaction states.
* Implemented responsive layouts for mobile, tablet and desktop devices.
* Enhanced JavaScript functionality to support:

  * Mobile navigation toggle
  * Service search filtering
  * Form validation
  * Gallery lightbox functionality
  * Keyboard accessibility improvements

### Documentation

* Updated README with project overview and feature descriptions.
* Documented responsive design implementation.
* Documented SEO improvements and accessibility features.
* Added project progress tracking through changelog updates.



## [Release] - 2026-04-29 (Part 1: Requirements Analysis & HTML Structure)

### Added

* Documented project requirements and implementation objectives.
* Created initial project folder structure.
* Created the following website pages:

  * Home (`index.html`)
  * About (`about.html`)
  * Services (`services.html`)
  * Gallery (`gallery.html`)
  * Enquiry (`enquiry.html`)
  * Contact (`contact.html`)
* Implemented shared header and footer navigation across all pages.
* Added semantic HTML structure throughout the website.

### Changed

* Established the core website layout using semantic HTML5 elements:

  * `header`
  * `nav`
  * `main`
  * `section`
  * `article`
  * `footer`
* Organised content structure to support future styling, responsiveness and accessibility improvements.
