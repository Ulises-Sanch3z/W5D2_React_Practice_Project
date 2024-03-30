# Favorite Learning Resources

This application was created for the purpose of sharing my favorite learning resources (books and websites). This application features a simple navigation system that allows users to switch between the home page, a books page, and a websites page.

## Component Structure
* `App`:
- The root component that manages the main application state and navigation.

* State:
    * `currentPage`: A string indicating which page is currently displayed.

* Methods:
    * `navigate(page)`: Updates the currentPage state to navigate between different pages.
    * Renders the `NavBar` component and conditionally renders either the `LandingPage`, `Books`, or `Websites` based on the `currentPage` state.

* NavBar:
    * Displays the navigation bar with a home button.
    * Props:
        * `onNavigate`: Function passed from App to change the current page.

* `LandingPage`:
    * Provides a brief introduction and description of the website.
    * Provides buttons for navigating to the Books and Websites pages.

* Props:
    * `onNavigate`: Function passed from App for navigating to different pages.

* `Books` Page:
    * Displays a list of books.
    * Each book entry includes the title, author, a brief description, and a link for more information.

* `Websites` Page:
    * Displays a list of websites that offer valuable learning materials for coding and web development.
    * Each website entry includes the name, a brief description, and a link to the website.

## State Management
    - The application's state is managed in the App component, utilizing React's useState hook. This includes the current page being displayed.

## Lifecycle Methods

    * I used React hooks (useState) in functional components to manage state.

## Conclusion
    * It took many hours for me to complete this assignment and even now i still do not fully understand everything i did. I will continue to work with react to familiarize myself with its structure and features. I definitely like react compared to other forms of creating websites as I dont have to work with multiple html files and i can easily implement logic onto the pages using js. 

