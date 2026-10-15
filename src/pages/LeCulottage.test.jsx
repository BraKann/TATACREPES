import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { createElement } from 'react'
import { MemoryRouter } from 'react-router-dom'
import LeCulottage from './LeCulottage.jsx'

describe('LeCulottage page', () => {
  it('renders the explanation and contact action', () => {
    const markup = renderToStaticMarkup(
      createElement(MemoryRouter, null, createElement(LeCulottage))
    )

    expect(markup).toContain('Le culottage')
    expect(markup).toContain('href="/contact"')
  })
})
