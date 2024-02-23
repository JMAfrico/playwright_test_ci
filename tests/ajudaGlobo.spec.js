import { test, expect } from '@playwright/test';

test('teste teste', async ({ page }) => {
  await page.goto('https://grupoglobo--qa1.sandbox.my.site.com/centraldeajuda/s/');
  await page.getByPlaceholder('Exemplo: Como alterar minha').click();
  await page.getByPlaceholder('Exemplo: Como alterar minha').fill('teste');
  await page.getByPlaceholder('Exemplo: Como alterar minha').press('Enter');
  await page.getByText('artigo teste vsiibilidade').click();
  expect(page.locator("//html/body/div[3]/div[1]/div/div[3]/div/div[1]/c-d2c_central_ajuda_article_detail/div/div[1]/h1").isVisible());
  expect(page.locator("//html/body/div[3]/div[1]/div/div[3]/div/div[1]/c-d2c_central_ajuda_article_detail/div/div[1]/h1").isVisible());
  
});