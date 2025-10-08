import React, { useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import ProductList from './features/ProductList'
import ProductDetail from './features/ProductDetail'
import FavoritesPage from './features/FavoritesPage'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './store/slices/productsSlice'
import { selectFavoritesCount } from './store/slices/favoritesSlice'

export default function App() {
  const dispatch = useDispatch()
  const favCount = useSelector(selectFavoritesCount)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto p-4 flex justify-between items-center">
          {/* Brand */}
          <Link
            to="/"
            className="font-bold text-2xl text-blue-600 hover:text-blue-700 transition-colors"
          >
            Product Dashboard
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Products
            </Link>

            <Link
              to="/favorites"
              className="relative flex items-center gap-1 text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Favorites
              {favCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
                  {favCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </main>
    </div>
  )
}
