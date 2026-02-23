# Agentic AI Instructions: RHM Events Portfolio Completion & Shipping

## 📌 Context Context & Role
You are an expert frontend developer and agentic AI. Your mission is to complete the static portfolio website for **RHM Events & Wedding Company** and prepare it for production deployment. The foundation is already built using **HTML5, Tailwind CSS, and vanilla JavaScript**. Your focus will be on feature completeness, integration, optimization, and shipping.

## ⚠️ Core Constraints & Guidelines
1. **Tech Stack**: Strictly use HTML5, Tailwind CSS (utility-first), and vanilla JavaScript. Do not introduce heavy frontend frameworks (React/Next.js) as that is planned for a later phase.
2. **Design System Compliance**: 
   - Maintain the established color palette: Background (`#fcfbf8`), Accent Yellow (`#fac638`), Main Text (`#1c180d`), Secondary Text (`#9e8747`), Border (`#f4f0e6`).
   - Use configured typography: Plus Jakarta Sans / Noto Sans.
3. **Architecture**: Adhere to the established component-based structure (reusing navbar and footer) and keep standard classes for CTA buttons and layout containers.
4. **Quality Code**: Write semantic, accessible HTML, keep JavaScript clean and well-commented, and avoid custom CSS where Tailwind utilities suffice.

---

## 🚀 Execution Roadmap

### Phase 1: Content Assembly & Dynamic Features
*Objective: Unify outstanding pages into `index.html` and implement core interactions.*

- [ ] **Event Gallery**: Build the gallery section in `index.html`. Implement a JS-driven filtering/search script. Integrate the configured **Fancybox.js** for the lightbox view.
- [ ] **Testimonials Integration**: Migrate the static layout from `testimonials.html` into a functional sliding carousel within `index.html`.
- [ ] **FAQ Section**: Migrate `faq.html` content to `index.html` and implement an expandable/collapsible accordion using JS.
- [ ] **About Us**: Design and code the "About Us" section directly into the homepage, maintaining the brand's elegant aesthetic.
- [ ] **Contact Section**: Construct a contact form and integrate **EmailJS** to enable form submissions without a backend server.

### Phase 2: Third-Party Integrations
*Objective: Enhance user engagement and accessibility.*

- [ ] **Location**: Integrate the **Google Maps API** (or an embedded map iframe) pinpointing Erattupetta, Kerala.
- [ ] **Direct Contact**: Add a floating, responsive **WhatsApp chat widget** linked to the configured business number.

### Phase 3: Polish & Optimization
*Objective: Ensure the site is production-ready, performant, and discoverable.*

- [ ] **Responsive Audit**: Test and fix any layout issues across mobile, tablet, and desktop viewports using Tailwind's responsive prefixes.
- [ ] **Asset Optimization**: Compress any large hero/gallery images to WebP format. Ensure `loading="lazy"` is heavily utilized for off-screen media.
- [ ] **SEO Setup**: Add complete meta tags, Open Graph tags, and structured data (JSON-LD LocalBusiness schema) for better search ranking. Check heading hierarchy (`H1` to `H6`).

### Phase 4: Shipping & Deployment Prep
*Objective: Finalize the build for Netlify hosting.*

- [ ] Verify there are no broken links and that the component architecture (`components/navbar.html`, etc.) compiles or is structured correctly for production.
- [ ] Finalize standard GitHub commits and ensure the `main` branch is clean for Netlify auto-deployment.

---

## ✅ "Done" Criteria
The product is ready when the single-page experience in `index.html` contains all promised sections, functions seamlessly without console errors, scores highly on Lighthouse (Performance/Accessibility/SEO), and is ready to be pushed to GitHub to trigger a Netlify release.
