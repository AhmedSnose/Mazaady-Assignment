# Application Documentation

## Overview

This application features a dynamic form with a series of interdependent, searchable dropdown menus. It allows users to select a main category, a corresponding subcategory, and then various properties related to the selected category. Based on the user's choices, the form generates additional fields, and the values selected by the user are displayed in a table. The application also includes a profile page, product component, QR code component, and several technical features such as API routes, server-side components, and unit tests.

## Key Features

### 1. Form Component
The form contains two searchable dropdown menus:
- **Main Category**: Displays a list of all available main categories.
- **Subcategory**: Initially empty but gets populated with the child categories of the selected main category.

Once a subcategory is selected, the application dynamically populates additional dropdowns containing the properties associated with the selected category. 

- **Dynamic Property Selection**: Each property dropdown contains options related to the selected subcategory.
- **"Other" Option**: If the user selects the "other" option for a property, an input field will appear where they can enter their own value.
- **Parent-Child Relationships**: Some properties have children (e.g., selecting "brand" generates a list of models, and selecting a model may lead to selecting a type). This is handled dynamically with arrays of child properties that might themselves be parents of other properties.

After filling in the form, the user can click on the "Submit" button to display all selected values (key, value pairs) in a table format.

### 2. Environment Configuration
The application relies on the following environment variables set in the `.env` file:
- `MAZAADY_PRIVATE_KEY`: (Your private key for API usage).
- `APP_URL`: The base URL of your app (typically `http://localhost:3000/` during development).
- `API_BASE_URL`: The base URL for API requests.

### 3. Unit Testing with Jest
The application uses **Jest** for unit testing, ensuring that the components and functionalities are working as expected.

### 4. Design & Styling
The application has a modern design with the following technologies:
- **Chad CN**: Used for managing classnames dynamically.
- **Tailwind CSS**: Utilized for fast and responsive styling.

### 5. Components
The app includes several key components:
- **Profile Component**: Displays user profile information.
- **Product Component**: Displays product details.
- **QR Code Component**: Displays a generated QR code based on the current context.

### 6. API Routes & Server Components
The app uses **API routes** and **server components** to handle data fetching and other server-side logic efficiently.

## Usage

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
