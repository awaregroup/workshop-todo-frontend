# Todo Frontend

## Overview
This repo contains a semi-finished state of the project you will be working on in this workshop. You will be creating a new Next.js project and then leveraging GitHub Copilot to build out the code changes.

## Pre-requisites

1. Create a new Next.js project ```yarn create next-app```
2. Accept all the defaults (App Router, Tailwind CSS, Typescript etc)

## Workshop steps

1. Navigate here to retrieve the backend API URL: ```https://dummyjson.com/docs/todos```. You'll reference this page to see the JSON object structure also.
2. Create a new typescript model for a ```Todo``` object. Use GitHub Copilot to generate this class using the sample JSON as a reference.
3. Create a new typescript service for a ```TodoService``` object. Use GitHub Copilot to generate this class using axios for interacting with the JSON API provided. Import the Todo class/interface created earlier in this file.
4. Have GitHub Copilot modify ```page.tsx``` to remove the default template contents.
5. Generate a table based on the Todos retrieved from TodoService on page load. Make sure the table is rendered based on that data.
6. Add a delete button to the table and implement a handler to call the correct method on the ```TodoService```.
7. Restyle the page using GitHub Copilot. **Hint: Also look to restyle the tailwind defaults.**
8. Create a form and handler for creating new Todos.

## Extra for experts

8. Refactor the Todos table into its own component.
9. Implement specific react hooks for the Todos.
10. Implement caching.
11. Implement loading indicator on data refreshes.
12. Generate documentation.