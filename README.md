# **RHM Events & Wedding Company**

### **🚀 Overview**

This is a **static portfolio website** for RHM Events & Wedding Company based in **Erattupetta, Kerala**. Built with **HTML5, Tailwind CSS, and JavaScript**, it showcases event management services and provides an elegant platform for potential clients to explore our work and get in touch.

The website follows a **single-page application (SPA) architecture** with optimized performance, SEO, and future scalability to **Next.js**.

---

## **🎯 Current Features**

### **✅ Implemented**

#### **1️⃣ Hero Section**
✔ Auto-sliding carousel with 3 hero images  
✔ Compelling tagline: "Crafting Unforgettable Moments"  
✔ Prominent CTA button  

#### **2️⃣ Content Sections**
✔ Services Overview  
✔ Client Testimonials carousel  
✔ FAQ section with expandable accordion  
✔ About Us story & team  
✔ Event Gallery with search, category filtering & Fancybox  

#### **3️⃣ Additional Features**
✔ Contact form with EmailJS integration  
✔ Google Maps Erattupetta location  
✔ WhatsApp floating chat widget  
✔ Lightbox image viewer (Fancybox)  
✔ Fully responsive mobile, tablet & desktop layouts  
✔ SEO metadata, JSON-LD Schema & OpenGraph tags  
✔ WebP image optimizations and lazy loading  

---

## **🛠️ Tech Stack**

| Technology | Usage | Status |
|------------|-------|--------|
| **HTML5** | Structure & semantic markup | ✅ Implemented |
| **Tailwind CSS** | Utility-first styling & responsiveness | ✅ Implemented |
| **JavaScript** | Interactivity, filtering, APIs | ✅ Implemented |
| **Plus Jakarta Sans** | Primary typography | ✅ Implemented |
| **Fancybox.js** | Lightbox image viewer | ✅ Implemented |
| **EmailJS** | Contact form submission | ✅ Implemented |
| **Google Maps API** | Business location display | ✅ Implemented |
| **Font Awesome** | Icon library | ✅ Implemented |

---

## **📁 Project Structure**

```
rhm_events/
├── index.html                # Main Application (SPA)
├── assets/
│   ├── images/
│   │   ├── logos/
│   │   │   ├── logo.jpg
│   │   │   └── favicon.ico
│   │   └── hero/
│   │       ├── hero_image1.webp
│   │       ├── hero_image2.webp
│   │       └── hero_image3.webp
│   └── js/
│       └── script.js         # Core Interactivity & Logic
└── README.md
```

---

## **🌍 Development Setup**

### **🔹 Local Development**

1️⃣ **Clone the repository:**
```bash
git clone https://github.com/muzammil-13/rhm_events.git
```

2️⃣ **Navigate to project:**
```bash
cd rhm_events
```

3️⃣ **Open in browser:**
Using a local dev server is highly recommended to prevent CORS issues.
```bash
# Python
python -m http.server 8000
# Node
npx serve .
# Or use VS Code Live Server extension
```
Visit the provided localhost URL in your browser.

---

## **🎨 Design System**

### **🎯 Design Tokens**

```css
/* Color Palette */
--bg-primary: #fcfbf8;      /* Main background */
--accent-yellow: #fac638;   /* CTA buttons & highlights */
--text-primary: #1c180d;    /* Main text */
--text-secondary: #9e8747;  /* Secondary text */
--border-light: #f4f0e6;    /* Subtle borders */
```

---

## **📈 Current Status & Roadmap**

### **🟢 Completed (100% Phase 1-3)**
- [x] Basic HTML structure & Header/Navigation
- [x] Hero section with carousel
- [x] Services & Event gallery implementation
- [x] Testimonials & FAQ integration
- [x] Contact form setup & Google Maps integration
- [x] WhatsApp chat widget
- [x] Performance optimization (WebP, Lazy Loading)
- [x] SEO improvements (OpenGraph, JSON-LD)

### **🔴 Planned (Long-term)**
- [ ] Migrate to Next.js for better performance
- [ ] Add CMS integration (Strapi/Contentful)
- [ ] Implement user dashboard for clients
- [ ] Add blog section for SEO

---

## **🚀 Deployment**

### **🔹 Current Hosting**
- **Platform**: Netlify (planned)
- **Status**: Ready for staging

### **🔹 Deployment Commands**
```bash
# Push to GitHub (auto-deploys to Netlify)
git add .
git commit -m "Update: [description]"
git push origin main
```
> **Note:** Ensure you replace the placeholder `YOUR_PUBLIC_KEY`, `YOUR_SERVICE_ID`, and `YOUR_TEMPLATE_ID` in `assets/js/script.js` before deploying the contact form to production.

---

## **🤝 Contributing**

### **Development Guidelines**
- Maintain **consistent styling** with Tailwind
- Use **semantic HTML** for accessibility
- Test **responsive design** on all devices
- Keep **performance** in mind (optimize images, minimize JS)

### **Code Standards**
- **HTML**: Semantic, accessible markup
- **CSS**: Tailwind utility classes, avoid custom CSS
- **JavaScript**: ES6+, modular approach
- **Images**: WebP format, optimized for web

---

## **📞 Contact & Business Info**

🏢 **RHM Events & Wedding Company**  
📍 **Location**: Erattupetta, Kerala, India  
📧 **Email**: info@rhmevents.com  

### **Services Offered**
- ✨ Wedding Planning & Coordination
- 🏢 Corporate Event Management
- 🎉 Social Gatherings & Parties
- 🎂 Private Celebrations
- 📸 Event Photography & Videography

---

## **📄 License**

This project is licensed under the **MIT License**. See LICENSE file for details.

---

## **🔖 Version History**

- **v1.0.0** - Consolidated SPA migration, added dynamic JS features, performance & SEO optimization
- **v0.3.0** - Component extraction & hero carousel
- **v0.2.0** - Header/navigation implementation  
- **v0.1.0** - Initial project setup

---

*Last Updated: 23 February 2026*
