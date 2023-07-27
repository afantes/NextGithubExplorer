# GitHub Explorer Application with Next.js 📝

Welcome to the GitHub Explorer project with Next.js! This enhanced version of the previous [" GitHub Explorer project "](https://github.com/afantes/JS_GitHub_Explorer) initially developed in Vanilla JavaScript, is built using the popular React framework, [Next.js](https://nextjs.org/), which facilitates the creation of web applications.

You can view the application in action at the following address: [GitHub Explorer App](https://next-githubexplorer-afantes.vercel.app/)

Designed to facilitate navigation and discovery of a specified user's GitHub repositories, our application displays crucial details such as the repository's name, URL, and star count. Moreover, thanks to its flexible structure, new details can easily be added to each repository.

## Why GitHub Explorer ? 🎯

The primary goal of GitHub Explorer is to provide a tool for discovering and exploring GitHub repositories. Here are some of the benefits our web application offers:

1. **Discovery:** Easily access GitHub repositories of a specific user.

2. **Simplicity:** A clear and intuitive interface makes the application easy to use.

3. **Educational Resource:** The application's source code can serve as an educational resource for developers seeking to understand API interactions, dynamic routes, API routes, Server-side rendering, modern JavaScript techniques, ...

4. **Versatility and Extensibility:** Designed to be easily extensible, the application allows adding new details to each repository.

In short, GitHub Explorer proposes itself as a simple yet powerful tool for exploring GitHub repositories, assisting users in efficiently discovering and navigating through them.

## Technologies and Features Used 💻

Among the techniques used in this project:

### Next.js

- **Pages & Routing:** Next.js offers a file-based approach for routing. Each file in the pages directory corresponds to a route. For instance, in this project, pages/index.js is the homepage, and pages/about.js serves to display the about page.

- **API Routes:** API routes allow creating a backend API directly within a Next.js project. In this project, pages/api/repos.js is an API route handling requests to the GitHub API.

- **Dynamic Routes:** Dynamic routes allow creating pages with dynamic paths based on URL parameters. For example, in pages/user/[username].js, the [username] is a dynamic URL parameter.

- **Server-side rendering:** With the getServerSideProps function, Next.js generates HTML with each request, allowing dynamic web pages to be generated from data coming from external sources, in this case, the GitHub API.

- **CSS Modules:** Next.js supports basic CSS modules. It's a way to compartmentalize styles to avoid conflicts.

- **Built-in support for ES6+:** Next.js supports the latest JavaScript features. This project heavily uses ES6 features, including modules, object destructuring, promises, and arrow functions.

- **Custom _app.js and _document.js:** These two special files allow customizing the application behavior. _app.js is used to define global layout elements and initialize properties, while _document.js is used to modify the basic HTML structure of the application.

### React.js

- **React Hooks:** React Hooks allow using the state and other React features without writing a class. In this project, the useState hook is used to manage the state of the username and the repository list.

- **Functional Components:** All components in this project are functional components, which are easier to read and test, and can use React Hooks.

- **Styled-components:** It's a library that allows using CSS in JavaScript to style components. In this project, I used styled-components to define the styles of several components.

### Other
- **Fetch API:** Used to make requests to the GitHub API. For example, in pages/api/repos.js, we use the fetch function to retrieve the list of repositories of the specified user.

## Project Structure 🗂

- **Components:** Contains all React components used in the application.
- **Pages:** Contains the different pages of the application.

## How to Get Started 🚀

1. Clone this repository to your local environment.
2. Run `npm install` to install all necessary dependencies.
3. Run `npm run dev` to start the application in development mode.

## Contribution 🤝

Contributions to this project are welcome.
