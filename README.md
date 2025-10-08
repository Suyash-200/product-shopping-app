# React Product Dashboard

A modern **Product Dashboard** built with **React**, **Redux Toolkit**, **Tailwind CSS**, and **React Router**, showcasing product listings, search & filter functionality, product details, and favorites management.  

## Features

- Fetches product data from [Fake Store API](https://fakestoreapi.com).  
- **Product Listing Page** with responsive grid layout.  
- **Search & Filter**:
  - Debounced search by title.  
  - Filter by category.  
  - Sort by price (ascending/descending).  
- **Product Detail Page** with full product info.  
- **Favorites Management**:
  - Add/remove favorites stored in Redux store.  
  - Favorites count displayed in header.  
- Fully **responsive** and **accessible** UI.  
- **Unit & integration testing** with React Testing Library.  

## Technologies Used

- React (Functional Components & Hooks)  
- Redux Toolkit (Slices, Async Thunks, Selectors)  
- React Router v6  
- Tailwind CSS for modern styling  
- React Icons  
- Axios for API calls  
- Jest & React Testing Library for testing  

## Project Structure

src/
├─ features/
│ ├─ ProductList.jsx
│ ├─ ProductCard.jsx
│ ├─ ProductDetail.jsx
│ ├─ FavoritesPage.jsx
│ ├─ SearchBar.jsx
│ └─ Filters.jsx
├─ store/
│ ├─ slices/
│ │ ├─ productsSlice.js
│ │ └─ favoritesSlice.js
│ └─ store.js
├─ App.jsx
└─ index.js