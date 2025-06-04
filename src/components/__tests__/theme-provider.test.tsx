import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider, useTheme } from '../theme-provider'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>toggle</button>
}

describe('ThemeProvider', () => {
  it('toggles html class when button clicked', async () => {
    render(
      <ThemeProvider defaultTheme="light">
        <ThemeToggle />
      </ThemeProvider>
    )
    const html = document.documentElement
    expect(html.classList.contains('light')).toBe(true)
    await userEvent.click(screen.getByRole('button'))
    expect(html.classList.contains('dark')).toBe(true)
  })
})
