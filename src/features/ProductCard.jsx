import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, removeFavorite, selectFavoritesIds } from '../store/slices/favoritesSlice'

export default function ProductCard({ product }) {
  const dispatch = useDispatch()
  const favoritesIds = useSelector(selectFavoritesIds)
  const isFav = favoritesIds.includes(product.id)

  const handleFavorite = () => {
    if (isFav) {
      dispatch(removeFavorite(product.id))
    } else {
      dispatch(addFavorite(product.id))
    }
  }

  return (
    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Image + Category badge */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain mb-3"
        />
        <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full capitalize">
          {product.category}
        </span>
      </div>

      {/* Title and price */}
      <h3 className="text-sm font-semibold line-clamp-2 mb-1">{product.title}</h3>
      <p className="text-gray-600 font-medium mb-3">${product.price.toFixed(2)}</p>

      {/* Favorite button */}
      <button
        onClick={handleFavorite}
        className={`mt-auto px-4 py-2 rounded-lg text-white font-medium transition-colors duration-300 ${
          isFav
            ? 'bg-red-500 hover:bg-red-600'
            : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        {isFav ? '❤️ Remove Favorite' : '🤍 Add to Favorites'}
      </button>
    </div>
  )
}
