/* eslint-disable no-unused-vars */
import { describe, it, expect } from 'vitest'
import productsReducer, { fetchProducts } from '../store/slices/productsSlice'

// Basic reducer test
describe('products slice', () => {
it('should handle initial state', () => {
const state = productsReducer(undefined, { type: 'unknown' })
expect(state.items).toBeDefined()
expect(state.status).toBe('idle')
})
})