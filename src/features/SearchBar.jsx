import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../store/slices/productsSlice'
import { FiSearch } from 'react-icons/fi'

export default function SearchBar() {
  const [q, setQ] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(setSearch(q))
    }, 400)
    return () => clearTimeout(id)
  }, [q, dispatch])

  return (
    <div className="relative w-full md:w-1/2">
      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search products..."
        className="w-full pl-10 pr-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all bg-white hover:bg-gray-50"
        aria-label="Search products"
      />
    </div>
  )
}
