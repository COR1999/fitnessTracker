import { test, expect } from '@playwright/test';

// UI command npx playwright test --ui

test.describe("Home page", () =>{

  test.beforeEach(async ({ page }) => {
    // Visit page
    await page.goto("http://localhost:5174/")
  })
  
  test("Should have correct metadata and elements", async ({page}) =>{
    
    // Check title has loaded
    await expect(page).toHaveTitle("Fitness Tracker");

    await page.getByText("Welcome to Your Fitness Journey");


  })

  test("Should make sure that all buttons work correct", async ({page}) => {
    await page.getByRole('button', { name: "Add Workout" } ).click();
    await expect(page.getByRole("form", { name: "workout form"} ));
    
  })

})