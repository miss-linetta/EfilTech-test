# 🌸 Flower Delivery App

Web application for ordering flower delivery.  
Implemented as a test task for **ET-school**.

---

## 🚀 Features Implemented

### ✅ Base Level
- **Flower shops page**:
    - Fetch flowers from PostgreSQL database
    - Ability to add bouquets or single flowers to the shopping cart
- **Shopping cart page**:
    - View added products
    - Change product quantity or remove products
    - Enter contact details (email, phone, delivery address)
    - Submit order → order is saved in the database

---

### ✅ Middle Level
- **Sorting flowers** by price and date added
- **Cart persistence** — cart saved in localStorage
- **Order details page** with:
    - Unique order ID
    - List of products
    - Total price
    - Delivery address
    - Date and time (adjusted to the user’s timezone)

⚠️ **Not implemented**: marking flowers as favorites

---

### ✅ Expert Level
- **Pagination** for browsing large flower catalogs

---

## 🛠️ Tech Stack
- **Front-End:** [Next.js](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org/) + [Material UI](https://mui.com/)
- **Back-End:** [Express](https://expressjs.com/) + [TypeScript](https://www.typescriptlang.org/)
- **Database:** [PostgreSQL](https://www.postgresql.org/)

---

## 📦 How to Run Locally
```bash
# clone the repo
git clone https://github.com/miss-linetta/EfilTech-test.git

# install dependencies and run backend
cd server
npm install
npm run dev

# install dependencies and run frontend
cd client
npm install
npm run dev
```

---

## 🌍 Demo
Deployment to a public hosting was not possible due to technical issues.  
To still showcase the project’s functionality, I recorded a short video walkthrough demonstrating:
- Browsing flower shops and products
- Adding/removing items from the cart
- Order creation with validation and saving to the database
- Order details page with correct timezone display
- Pagination for large product lists

🎥 [Watch demo video](https://www.loom.com/share/d57612c95f9b4bc4a5633d828aa0d53c?sid=c2ed4787-201c-4ed4-9e11-cf44df867dcc)
