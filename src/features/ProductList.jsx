import React from 'react'
import { useSelector } from 'react-redux'
import { selectFilteredProducts } from '../store/slices/productsSlice'
import ProductCard from './ProductCard'
import SearchBar from './SearchBar'
import Filters from './Filters'

export default function ProductList() {
  const products = useSelector(selectFilteredProducts)
  const status = useSelector(state => state.products.status)
  const error = useSelector(state => state.products.error)

  if (status === 'loading')
    return (
      <div className="text-center text-gray-500 mt-20 text-lg font-medium">
        Loading products...
      </div>
    )
  if (status === 'failed')
    return (
      <div className="text-center text-red-500 mt-20 text-lg font-medium">
        Error: {error}
      </div>
    )

  return (
    <div className="pb-8">
      {/* Search and Filters */}
      <div className="mb-6 p-4 bg-white rounded-xl shadow-md flex flex-col md:flex-row md:justify-between gap-4 items-center">
        <SearchBar />
        <Filters />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {/* No products message */}
      {products.length === 0 && (
        <div className="text-center text-gray-500 mt-10 text-lg font-medium">
          No products found.
        </div>
      )}
    </div>
  )
}
