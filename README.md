<!-- CONTACT MANAGER -->

*React.js Fundamentals and Step-by-Step

1. Every React App has a ROOT COMPONENT
- In index.html - <div>Root</div> - this is where the main app component is rendered. Basically every component created will go into App Component. 
2. App Component is rendered through Root in index.html
3. Build App in /src

<!-- Index.js -->
Entry point for all js
ReactDOM renders main app component. 
- Takes in 2 things. Renders the <App /> Component.
- Grabs id - Root and puts it into the main app component

<!-- App.js -->
Main App Component
- What is rendered to the <div> in the Dom
- It is a CLASS
- Extends the core Component class that is included with React
- Component class includes different methods - including render()
- Render() - returns something to the component/browser - which is App

<!-- Creating a Component -->
1. Create src/components/File.js
2. Bring in React and Create a Class
3. Generate a class-based component by USING SHORTCUT - rcc tab
4. Bring into App Component - App.js
5. If Exporting as Default, DON'T need to import into App.js with { }

<!-- Bring in Bootstrap -->
'npm install boostrap'
*In App.js* - import 'bootrap/dist/css/boostrap.min.css';
