import React from 'react'
import { render, screen } from '@testing-library/react'

import { Pikachu } from './pikachu'

test('renders the <Pikachu /> component', () => {
  render(<Pikachu />)
  const nodeElement = screen.getByTestId(/pikachu-svg/i)
  expect(nodeElement).toBeInTheDocument()
})
