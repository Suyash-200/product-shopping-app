import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllProducts } from '../store/slices/productsSlice'
import { addFavorite, removeFavorite, selectFavoritesIds } from '../store/slices/favoritesSlice'

export default function ProductDetail() {
  const { id } = useParams()
  const products = useSelector(selectAllProducts)
  const product = products.find(p => p.id === Number(id))
  const dispatch = useDispatch()
  const favIds = useSelector(selectFavoritesIds)

  if (!product) return <div className="text-center mt-20 text-gray-500">Product not found</div>

  const isFav = favIds.includes(product.id)

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg max-w-5xl mx-auto mt-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image */}
        <div className="relative md:w-1/3">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-80 object-contain rounded-lg shadow-md"
          />
          <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full capitalize">
            {product.category}
          </span>
        </div>

        {/* Details */}
        <div className="md:flex-1 flex flex-col">
          <h1 className="text-3xl font-bold mb-3">{product.title}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600 mb-6">${product.price.toFixed(2)}</p>

          <button
            onClick={() =>
              isFav
                ? dispatch(removeFavorite(product.id))
                : dispatch(addFavorite(product.id))
            }
            className={`px-5 py-2 rounded-lg font-medium text-white transition-colors duration-300 ${
              isFav ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {isFav ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
          </button>
        </div>
      </div>
    </div>
  )
}
