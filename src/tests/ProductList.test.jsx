/**
 * @jest-environment jsdom
 */
/* eslint-env jest */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import store from '../store/store'
import ProductList from '../features/ProductList'
import { test, expect } from '@jest/globals'

test('renders ProductList skeleton', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <ProductList />
      </MemoryRouter>
    </Provider>
  )

  // because fetchProducts dispatched on mount, we show loading state or grid
  expect(screen.getByPlaceholderText(/Search products/i)).toBeInTheDocument()
})
