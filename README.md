"# E-commerce-About-Us" 
# E-commerce Store (About Us)

A modern, responsive e-commerce web application built with React. This project features a beautiful UI, interactive product browsing, cart functionality, and a clean, professional design.

---

## Features

- Hero Banner & Top Fashion Carousel: Eye-catching hero section and a horizontally scrolling carousel of trending products.
- Categories Section: Modern category cards with real product images, clickable to view all items in that category.
- Product Detail Page: Large product image, random product name/description, size and quantity selectors, price, Add to Cart and Buy Now buttons.
- Cart: Add, remove, and update product quantities. Cart summary with total, discount, and platform fee.
- Testimonials: Customer reviews with photos.
- Responsive Design: Works beautifully on desktop, tablet, and mobile.
- Modern Effects: Card pop/float on scroll, smooth transitions, and consistent branding.

---

## Folder Structure

```
ecommerce-store/
├── public/
│   └── assets/
│       ├── images/
│       │   ├── products/               # Product images for category cards
│       │   ├── wd/wd/                 # Main product images for carousel and detail
│       │   ├── u.jpeg, p.jpeg, d.jpeg # Testimonial customer photos
│       │   └── ...
│       └── ...
├── src/
│   ├── components/
│   │   ├── Banner.js, Banner.css
│   │   ├── BlogSection.js, BlogSection.css
│   │   ├── CartContext.js
│   │   ├── CartPage.js, CartPage.css
│   │   ├── CategoriesSection.js, CategoriesSection.css
│   │   ├── Footer.js, Footer.css
│   │   ├── Header.js, Header.css
│   │   ├── NotificationToast.js, NotificationToast.css
│   │   ├── ProductContainer.js, ProductContainer.css
│   │   ├── ProductDetail.js, ProductDetail.css
│   │   ├── TestimonialsSection.js, TestimonialsSection.css
│   │   ├── TrendingCarousel.js, TrendingCarousel.css
│   │   └── ...
│   ├── App.js, App.css
│   └── index.js
├── package.json
└── README.md
```

---

## Setup & Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd ecommerce-store
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open in your browser:
   Visit [http://localhost:3000](http://localhost:3000)

---

## Customization

- **Product Images:**
  - Carousel and product detail images: `public/assets/wd/wd/`
  - Category card images: `public/assets/images/products/`
  - Testimonial photos: `public/assets/images/u.jpeg`, `p.jpeg`, `d.jpeg`

- **Category Mapping:**
  - Update `CategoriesSection.js` and `CategoryPage.js` to change category images or product lists.

- **Styling:**
  - All major components have their own CSS files for easy customization.

- **Cart Logic:**
  - Managed via React Context in `CartContext.js`.

---

## Screenshots

The following screenshots are available in the project folder:


| Page | Screenshot |
|------|------------|
| Section 1 | ![](./screenshots/Screenshot%202025-07-14%20201543.png) |
| Section 2 | ![](./screenshots/Screenshot%202025-07-14%20201550.png) |
| Section 3 | ![](./screenshots/Screenshot%202025-07-14%20201556.png) |
| Section 4 | ![](./screenshots/Screenshot%202025-07-14%20201617.png) |
| Section 5 | ![](./screenshots/Screenshot%202025-07-14%20201626.png) |
| Section 6 | ![](./screenshots/Screenshot%202025-07-14%20201637.png) |
| Section 7 | ![](./screenshots/Screenshot%202025-07-14%20201644.png) |
| Section 8 | ![](./screenshots/Screenshot%202025-07-14%20201651.png) |
| Section 9 | ![](./screenshots/Screenshot%202025-07-14%20201709.png) |
| Section 10 | ![](./screenshots/Screenshot%202025-07-14%20201715.png) |
| Section 11 | ![](./screenshots/Screenshot%202025-07-14%20201728.png) |
| Section 12 | ![](./screenshots/Screenshot%202025-07-14%20201736.png) |
| Section 13 | ![](./screenshots/Screenshot%202025-07-14%20201746.png) |
| Section 14 | ![](./screenshots/Screenshot%202025-07-14%20201756.png) |
| Section 15 | ![](./screenshots/Screenshot%202025-07-14%20201803.png) |
| Section 16 | ![](./screenshots/Screenshot%202025-07-14%20201834.png) |
| Section 17 | ![](./screenshots/Screenshot%202025-07-14%20201931.png) |

---

## Credits

- UI/UX: Modern e-commerce best practices
- Images: Replace with your own product and customer images for production
- Built with React (https://reactjs.org/)

---

## License

This project is for educational/demo purposes. For commercial use, please replace all demo images and content.
