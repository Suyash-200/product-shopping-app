import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectProductsState, setCategory, setSort } from '../store/slices/productsSlice'

export default function Filters() {
  const { categories, filters } = useSelector(selectProductsState)
  const dispatch = useDispatch()

  return (
    <div className="flex gap-3 flex-wrap items-center">
      {/* Category Filter */}
      <select
        value={filters.category}
        onChange={(e) => dispatch(setCategory(e.target.value))}
        className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all bg-white hover:bg-gray-50"
        aria-label="Filter by category"
      >
        <option value="all">All Categories</option>
        {categories.map(c => (
          <option key={c} value={c} className="capitalize">{c}</option>
        ))}
      </select>

      {/* Sort Filter */}
      <select
        value={filters.sort}
        onChange={(e) => dispatch(setSort(e.target.value))}
        className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all bg-white hover:bg-gray-50"
        aria-label="Sort by"
      >
        <option value="none">No Sorting</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </div>
  )
}
