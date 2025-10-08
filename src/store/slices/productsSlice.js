import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import axios from 'axios'

const API = 'https://fakestoreapi.com/products'

export const fetchProducts = createAsyncThunk('products/fetchAll', async () => {
  const { data } = await axios.get(API)
  return data
})

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    categories: [],
    filters: {
      search: '',
      category: 'all',
      sort: 'none',
    },
  },
  reducers: {
    setSearch(state, action) {
      state.filters.search = action.payload
    },
    setCategory(state, action) {
      state.filters.category = action.payload
    },
    setSort(state, action) {
      state.filters.sort = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
        state.categories = Array.from(new Set(action.payload.map(p => p.category)))
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const { setSearch, setCategory, setSort } = productsSlice.actions

// selectors
export const selectProductsState = state => state.products
export const selectAllProducts = state => state.products.items

export const selectFilteredProducts = createSelector(
  [selectAllProducts, selectProductsState],
  (items, productsState) => {
    const { search, category, sort } = productsState.filters
    let result = items.slice()

    // filter by category
    if (category && category !== 'all') {
      result = result.filter(p => p.category === category)
    }

    // search by title
    if (search) {
      const q = search.toLowerCase()
      result = result.filter(p => p.title.toLowerCase().includes(q))
    }

    // sort
    if (sort === 'price-asc') {
      result.sort((a, b) => a.price - b.price)
    } else if (sort === 'price-desc') {
      result.sort((a, b) => b.price - a.price)
    }

    return result
  }
)

export default productsSlice.reducer
