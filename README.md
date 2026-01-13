# QA Automation Learning – Playwright

This repository contains my learning journey from QA Manual to QA Automation using Playwright.

Locator adalah cara Playwright menemukan element di DOM.
Pemilihan locator harus disesuaikan dengan struktur DOM agar test stabil.

# QA Automation with Playwright (POM)

This repository contains my learning journey and practice project
as a Manual QA transitioning into QA Automation using **Playwright**.

# Tech Stack
- Playwright
- JavaScript
- Node.js
- Page Object Model (POM)

# Project Structure
qa-automation-playground/
├── pages/
│ └── TodoPage.js # Page Object (locator & page logic)
├── tests/
│ └── todo-form.spec.js # Test cases (positive & negative)
├── playwright.config.js
└── README.md


## Test Scenarios Covered
- Add single todo (positive scenario)
- Add multiple todos
- Prevent adding empty todo (negative scenario)

# How to Run the Tests
```bash
npm install
npx playwright test

-- Day 15 Locator Strategy
Locator untuk input todo adalah getByRole('textbox')
Locator untuk list todo bisa berupa getByRole('listitem') atau getByText()
getByRole lebih aman karena lebih stabil dan tidak bergantung pada struktur CSS yang mudah berubah

