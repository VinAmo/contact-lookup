# Contact Lookup

## Description

This is a React application built with Next.js 13 and TypeScript. The application allows users to search and view contact details from a list of contacts. It features a search bar for filtering contacts by their first, last or full names and displays additional details for a selected contact in a separate section. Routing to the individual contact details page is also provided in the separate section.

## Features

- Search contacts by first, last or full name (case-insensitive)
- Display a list of contacts with their first name, last name, email, and avatar image
- Show additional details for a selected contact, including phone number
- Responsive design, adapt for different sizes (move email to expanding section for mobile screen)
- Support jumping to contact details page
- E2E tests using Cypress for navigation and search functionalities

## Requirements

- Node.js (v19.9.0 or higher)
- Yarn (v1.22.17 or higher)
- Next.js (v13.4.19 or higher)

## Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/VinAmo/contact-lookup.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd */contact-lookup
   ```

3. **Install dependencies**

   ```bash
   yarn install
   ```

4. **Run the development server**

   ```bash
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

This project uses Cypress for end-to-end testing. There are two main tests:

1. **Search Test**: Validates the search functionality.
2. **Navigation Test**: Ensures that the application's navigation works as expected.

### Running Tests

1. **Open Cypress Test Runner**

   ```bash
   yarn cypress open
   ```

2. **Run the tests**

   Select E2E Testing -> Chrome, and the test you want to run in the Cypress Test Runner.

## Author

Kion (Qingyang Zheng)
