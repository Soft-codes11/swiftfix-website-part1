# SwiftFix Plumbing Services Website

## Student Information

* **Name:** Bonolo Koto
* **Student Number:** ST10491271
* **Module:** WEDE5020 – Web Development (Introduction)

---

## Project Overview

SwiftFix Plumbing Services is a responsive multi-page website developed for a Pretoria-based plumbing company. The website provides information about the company, its services, service areas, contact details, and enquiry options. The project was built using semantic HTML5, responsive CSS3, and vanilla JavaScript to deliver an accessible, user-friendly, and search-engine-friendly experience.

The website demonstrates modern web development principles including responsive design, accessibility, client-side validation, search engine optimisation (SEO), and interactive user interface features.

---

## Live Website

**GitHub Pages Deployment:**

https://soft-codes11.github.io/swiftfix-website-part1/

---

## Website Features

### Home Page

* Hero section with company introduction
* Featured plumbing services
* Customer trust highlights
* Call-to-action buttons

### About Page

* Company background
* Mission statement
* Vision statement
* Core values

### Services Page

* Detailed service listings
* Live search filtering functionality
* Responsive service cards

### Gallery Page

* Responsive image gallery
* Interactive lightbox modal
* Keyboard navigation support

### Enquiry Page

* Service enquiry form
* Client-side validation
* User feedback messages

### Contact Page

* Contact information
* Service area details
* Embedded Google Map
* Contact form with validation and email preparation functionality

---

## Implemented Features

### User Interface & Navigation

* Responsive mobile-first design
* Sticky navigation bar
* Hamburger menu for smaller screens
* Consistent header and footer across all pages
* Responsive content layouts for mobile, tablet, and desktop devices

### JavaScript Functionality

* Mobile navigation toggle
* Live service search filter
* Gallery lightbox modal
* Keyboard-accessible gallery navigation
* Enquiry form validation
* Contact form validation
* Dynamic user feedback messages

### Form Validation

#### Enquiry Form

Validates:

* Full name
* Email address
* South African phone number
* Selected service type
* Problem description

Provides:

* Inline error messages
* Real-time validation feedback
* Success messages upon valid submission

#### Contact Form

Validates:

* Full name
* Email address
* South African phone number
* Subject length
* Message length

Provides:

* Inline error messages
* Accessible feedback messages
* ARIA validation support
* Mailto-based email generation

Upon successful validation, the form composes a message using the user's input and opens the default email client using a mailto link addressed to:

**[info@swiftfix.co.za](mailto:info@swiftfix.co.za)**

---

## Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript
* Google Maps Embed

---

## Responsive Design

The website follows a mobile-first design approach.

Responsive features include:

* Flexible content grids
* Responsive images
* Mobile hamburger navigation
* Tablet-specific layout adjustments
* Multi-column desktop layouts
* Relative sizing and spacing for improved scalability

The website has been tested across mobile, tablet, and desktop screen sizes.

---

## SEO Improvements

The website includes several search engine optimisation features:

### On-Page SEO

* Unique page titles
* Meta descriptions
* Meta keywords
* Descriptive image alt text
* Semantic HTML5 structure

### Technical SEO

* Canonical URL tags
* Open Graph metadata
* Twitter Card metadata
* Local Business JSON-LD structured data
* Favicon support

### Search Engine Support

* robots.txt
* sitemap.xml
* Search-engine-friendly page structure

---

## Accessibility

The website incorporates accessibility best practices including:

* Semantic HTML5 landmarks
* Keyboard-accessible navigation
* Keyboard-accessible gallery controls
* Form labels linked to inputs
* ARIA validation attributes
* ARIA live feedback regions
* Meaningful alternative text for images
* Accessible buttons and controls

---

## Folder Structure

```text
swiftfix-website-part1/
│
├── index.html
├── about.html
├── services.html
├── gallery.html
├── enquiry.html
├── contact.html
├── robots.txt
├── sitemap.xml
├── README.md
├── CHANGELOG.md
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── images/
    ├── screenshots/
    └── website images
```

### File Descriptions

* `index.html` — Homepage
* `about.html` — Company information
* `services.html` — Service listings and live search
* `gallery.html` — Image gallery and lightbox
* `enquiry.html` — Service enquiry form
* `contact.html` — Contact information and contact form
* `css/style.css` — Website styling
* `js/script.js` — JavaScript functionality
* `robots.txt` — Search engine crawler instructions
* `sitemap.xml` — Website sitemap
* `README.md` — Project documentation
* `CHANGELOG.md` — Development history

---

## Installation

1. Clone or download the repository.
2. Extract the project files if necessary.
3. Open the project folder in a code editor.
4. Open `index.html` in a web browser.

No additional dependencies or installation steps are required.

---

## Deployment

The website is deployed using GitHub Pages.

### Deployment URL

https://soft-codes11.github.io/swiftfix-website-part1/

### Publishing Updates

1. Commit changes to the repository.
2. Push changes to the main branch.
3. GitHub Pages automatically rebuilds and publishes the updated website.

---

## Changelog Summary

### Part 1

* Created website structure and core pages.
* Implemented semantic HTML5 layout.

### Part 2

* Added responsive design.
* Implemented navigation functionality.
* Added gallery lightbox.
* Added enquiry form validation.
* Added service search functionality.

### Part 3

* Added contact form validation.
* Added mailto-based submission handling.
* Implemented SEO enhancements.
* Added robots.txt and sitemap.xml.
* Added structured data and social metadata.
* Improved accessibility support.

---

## Screenshots

| Device  | Preview                                                    | Description                                            |
| ------- | ---------------------------------------------------------- | ------------------------------------------------------ |
| Desktop | ![Desktop](images/screenshots/desktop%20home%20sreen.jpeg) | Homepage displaying hero section and featured services |
| Tablet  | ![Tablet](images/screenshots/tablet%20hero%20section.png)  | Responsive tablet layout                               |
| Mobile  | ![Mobile](images/screenshots/mobile%20screen.png)          | Mobile-friendly stacked layout                         |

---

## References

Google (2025) *Search Engine Optimization (SEO) Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 28 May 2026).

Marcotte, E. (2011) *Responsive Web Design*. A List Apart. Available at: https://alistapart.com/article/responsive-web-design/ (Accessed: 28 May 2026).

Mozilla Developer Network (2025) *HTML: HyperText Markup Language*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML (Accessed: 28 May 2026).

Mozilla Developer Network (2025) *CSS: Cascading Style Sheets*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS (Accessed: 28 May 2026).

Mozilla Developer Network (2025) *JavaScript*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript (Accessed: 28 May 2026).

W3C (2023) *ARIA Authoring Practices Guide (APG)*. Available at: https://www.w3.org/WAI/ARIA/apg/ (Accessed: 28 May 2026).

W3Schools (2025) *JavaScript HTML DOM*. Available at: https://www.w3schools.com/js/js_htmldom.asp (Accessed: 28 May 2026).
