import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../../src/App'

describe('App', () => {
  it('renders the App component', () => {
    render(<App />)
    screen.debug(); // prints out the jsx in the App component unto the command line
  })

  it('renders the App component HTML content', (context) => {
    // this is a brittle test, included as a demo-- consider removing it, or skipping it by uncommenting the line below
    // context.skip()
    const {asFragment, getByText} = render(<App />)
    expect(getByText('Vite + React')).toBeInTheDocument()
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div>
          <a
            href="https://vitejs.dev"
            target="_blank"
          >
            <img
              alt="Vite logo"
              class="logo"
              src="/vite.svg"
            />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
          >
            <img
              alt="React logo"
              class="logo react"
              src="/src/assets/react.svg"
            />
          </a>
        </div>
        <h1>
          Vite + React
        </h1>
        <div
          class="card"
        >
          <button>
            count is 0
          </button>
          <p>
            Edit 
            <code>
              src/App.jsx
            </code>
             and save to test HMR!!!
          </p>
        </div>
        <p
          class="read-the-docs"
        >
          Click on the Vite and React logos to learn more
        </p>
      </DocumentFragment>
    `)
  })

  it('increments the counter when button is clicked', async() => {
    const {getByRole} = render(<App />)
    const incrementButton = await getByRole('button', { name: 'count is 0' });
    expect(incrementButton).toBeInTheDocument();
    await fireEvent.click(incrementButton)
    const incrementedButton = await getByRole('button', { name: 'count is 1' });
    expect(incrementedButton).toBeInTheDocument();
    await fireEvent.click(incrementedButton)
    const thirdIncrementedButton = await getByRole('button', { name: 'count is 2' });
    expect(thirdIncrementedButton).toBeInTheDocument();
  })
})