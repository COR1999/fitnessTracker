import { test, expect } from '@playwright/test';

// UI command npx playwright test --ui

test.describe("Home page", () =>{

  test.beforeEach(async ({ page }) => {
    // Visit page
    await page.goto("http://localhost:5173/")
  })
  
  test("Should have correct metadata and elements", async ({page}) =>{

    // Check title has loaded
    await expect(page).toHaveTitle("Fitness Tracker");
    // Check the Welcome text has loaded
    await page.getByText("Welcome to Your Fitness Journey");
  })

  test('form appears after button click', async ({ page }) => {

    // Ensure form is initially hidden (optional)
    await expect(page.locator('[data-testid="workout-form"]')).toBeHidden();
    
    // Click the button that should show the form
    await page.click('[data-testid="workout-button"]');
    
    // Verify the form is now visible
    await expect(page.locator('[data-testid="workout-form"]')).toBeVisible();
    // Click the Submit workout button to Submit form
    await page.click('[data-testid="submit-button"]');
  });
  // Chart Tests
  test('highchart renders with data', async ({ page }) => {
    // Wait for HighCharts container
    await expect(page.locator('[data-testid="highchart-container"]')).toBeVisible();


  });

})




