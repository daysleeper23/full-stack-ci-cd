const { test, describe, expect } = require('@playwright/test')
const baseURL = 'http://localhost:8080/'

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto(baseURL)
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
})