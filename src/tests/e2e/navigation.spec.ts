import { test, expect } from '@playwright/test'

test('homepage carga correctamente', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/GRUMEX/)
})

test('navegación a manufactura', async ({ page }) => {
  await page.goto('/')
  await page.click('a[href="/manufactura"]')
  await expect(page).toHaveURL('/manufactura')
})

test('formulario de contacto es visible', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('form')).toBeVisible()
})
