# SwiftFix Plumbing Services Website

## Student Information
- Name: Bonolo Koto
- Student Number: ST10491271
- Module: WEDE5020 - Web Development (Introduction)

## Project Overview
SwiftFix Plumbing Services is a multi-page, responsive website for a Pretoria-based plumbing company. It presents the company’s services, gallery, contact details, and enquiry form using semantic HTML, mobile-first CSS, and vanilla JavaScript enhancements.

## Current Website Status
The site currently includes:
- Home page with hero section, featured services, and trust highlights
- About page with company mission, vision, and values
- Services page with live search filtering
- Gallery page with an interactive lightbox
- Enquiry page with client-side form validation and feedback
- Contact page with service areas, embedded Google Map, and contact form
- Shared sticky header, responsive navigation, and consistent footer across all pages

## Implemented Features
- Responsive sticky navigation with a mobile hamburger menu
- Consistent multi-page layout with semantic HTML5 structure
- Service cards and responsive content grids
- Interactive gallery lightbox with keyboard navigation
- Live search filter on the services page
- Enquiry form validation with real-time error feedback
- Responsive Google Maps embed on the contact page
- SEO-friendly page titles, descriptions, keywords, and image alt text
- Accessible buttons, labels, and keyboard-friendly controls

## Technologies Used
- HTML5
- CSS3
- Vanilla JavaScript

## Responsive Design
The website uses a mobile-first layout with flexible grids, stacked content on smaller screens, and wider multi-column layouts on tablet and desktop. The navigation switches between a hamburger menu on small screens and a horizontal menu on larger screens.

## SEO Improvements
Each page includes:
- Unique `title` tags
- `meta` descriptions
- `meta` keywords
- Descriptive image `alt` text
- Semantic `header`, `main`, `section`, and `footer` elements

## Form Behaviour
### Enquiry form
The enquiry form on `enquiry.html` validates:
- Full name
- Email address
- South African phone number
- Selected service type
- Problem description

It shows inline error messages, live validation feedback, and a success message after a valid submission.

### Contact form
The contact page includes a standard contact form for general messages. It is present in the layout, but it does not currently have custom JavaScript validation or submission handling.

## Folder Structure
- `index.html` — Homepage
- `about.html` — About page
- `services.html` — Services page with live search
- `gallery.html` — Gallery page with lightbox
- `enquiry.html` — Enquiry form page
- `contact.html` — Contact page with embedded map and contact form
- `css/style.css` — Site styling
- `js/script.js` — Navigation, search, validation, and lightbox scripts
- `CHANGELOG.md` — Development history
- `README.md` — Project documentation

## Installation
1. Clone or download the project folder.
2. Open the folder in a code editor.
3. Open `index.html` in a browser.

## Changelog Summary
- Built the initial site structure and core pages.
- Added responsive styling, navigation, and layout improvements.
- Implemented JavaScript for menu toggling, services search, enquiry validation, and gallery lightbox.
- Updated page content and documentation to match the current website state.

## Screenshots

| Device | Preview | Description |
|--------|---------|-------------|
| Desktop | ![Desktop](images/screenshots/desktop%20home%20sreen.jpeg) | Homepage with hero section and service cards |
| Tablet | ![Tablet](images/screenshots/tablet%20hero%20section.png) | Hero section showing responsive layout |
| Mobile | ![Mobile](images/screenshots/mobile%20screen.png) | Stacked responsive layout on mobile |

*Click to view full size images*


## Accessibility
- Clear navigation structure
- Form labels linked to inputs
- Accessible gallery controls
- Keyboard support for lightbox navigation
- Semantic page landmarks

## References
- Mozilla Developer Network: HTML, CSS, and JavaScript documentation
- W3C ARIA Authoring Practices
- Google SEO best practices for titles and meta descriptions
- Responsive design best practices
- Vanilla JavaScript DOM interaction patterns
