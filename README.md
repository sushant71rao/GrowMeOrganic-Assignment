# React Internship Assignment

## Objective
The objective of this React Internship Assignment is to create a new React application that implements the following functionality:

1. Application Configuration
2. First Page of the Application
3. Second Page of the Application - Component 1
4. Second Page of the Application - Component 2

## Task 1: Application Configuration
- Created a new React application using Typescript and Vite.
- Configured the application with MUI, ensuring that all components within the application (e.g., buttons, text fields, dialogs) use MUI components.

## Task 2: First Page of the Application
- Created a form to collect the following information from the user:
  - Name
  - Phone number
  - Email
- Saved the user details in `localStorage` and routed the user to the second page.
- Redirected users attempting to access the second page without providing the necessary information back to the first page with a message indicating that they must enter their details before accessing the page.

## Task 3: Second Page of the Application [Component 1]
- Fetched a list of JSON details from an API (https://jsonplaceholder.typicode.com/posts).
- Converted the retrieved JSON data into a model/interface in Typescript.
- Displayed the data in a table using MUI's DataGrid component.

## Task 4: Second Page of the Application [Component 2]
- Created a component to display a list of departments and their sub-departments based on the provided JSON data.
- Sub-departments can be expanded and collapsed by the user.
- Added an icon to the right side of the department to allow users to expand or collapse the sub-departments.
- Users can select a department or sub-departments.
- If a user selects a department, all its sub-departments get selected.
- If a user selects all sub-departments of a department, the parent department gets selected as well.

## Extra Features
- Implemented `useContext` for storing the `localStorage` user.
- Added a button to clear `localStorage` data.
- Added loaders while loading the data.
- Developed the website with a green and black theme.

## Getting Started
To get started with this project, follow the steps below:

### Prerequisites
- Node.js and npm installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-internship-assignment.git
