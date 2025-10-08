import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectFavoritesIds, removeFavorite } from '../store/slices/favoritesSlice'
import { selectAllProducts } from '../store/slices/productsSlice'

export default function FavoritesPage() {
  const favIds = useSelector(selectFavoritesIds)
  const products = useSelector(selectAllProducts)
  const dispatch = useDispatch()

  const favProducts = products.filter(p => favIds.includes(p.id))

  if (!favProducts.length)
    return (
      <div className="text-center text-gray-500 mt-20 text-lg font-medium">
        No favorites yet.
      </div>
    )

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {favProducts.map((p) => (
        <div
          key={p.id}
          className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col"
        >
          <div className="relative">
            <img
              src={p.image}
              alt={p.title}
              className="h-48 w-full object-contain mb-3"
            />
            <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full capitalize">
              {p.category}
            </span>
          </div>

          <h3 className="text-sm font-semibold line-clamp-2 mb-1">{p.title}</h3>
          <p className="text-gray-600 font-medium">${p.price.toFixed(2)}</p>

          <button
            onClick={() => dispatch(removeFavorite(p.id))}
            className="mt-auto px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  )
}
